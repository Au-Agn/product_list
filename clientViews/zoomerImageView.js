import Marionette from 'backbone.marionette';
import Cookies from 'js-cookie'
import zoomerImage from '../views/partials/zoomer.hbs';

export const ZoomerImageView = Marionette.ItemView.extend({
  template: zoomerImage,

  ui: {
    'container': '.container',
    'zoomer': '.zoomerImage',
    'zoomerImageWrap': '.zoomerImageWrap',
    'image': '.image'
  },

  events: {
    'mousemove @ui.container': 'onZoomProduct'
  },

  onAttach() {
    const imageSrc = this.$el.parent().data('src');
    const isZoomerTransform = Cookies.get('isZoomerTransform');
    this.ui.image.attr('src', imageSrc);
    if (isZoomerTransform === 'true') {
      this.ui.container.removeClass('zoomerContainer');
    } else {
      this.ui.zoomerImageWrap.remove();
      this.ui.container.append(`<img src=${imageSrc} class="image mainImage mainImageZoom">`);
      this.ui.container.css('background-image', `url(${imageSrc})`);
    }
  },

  onZoomProduct(e) {
    const isZoomerTransform = Cookies.get('isZoomerTransform');
    if (isZoomerTransform === 'true') {
      this.onZoomWithTransform(e);
    } else {
      this.onZoomWithBackgroungPos(e);
    }
  },

  onZoomWithBackgroungPos: (e) => {
    const zoomer = e.currentTarget;
    const offsetX = e.offsetX;
    const offsetY = e.offsetY;
    const x = offsetX / zoomer.offsetWidth * 100;
    const y = offsetY / zoomer.offsetHeight * 100;
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
  },

  onZoomWithTransform(e) {
    const maxImageWidth = 1230;
    const maxImageHeight = 1500;

    const originalImage = $(e.currentTarget);
    const imageOffset = originalImage.offset();
    const imageSize = {
      width: originalImage.width(),
      height: originalImage.height(),
    };

    const xDiff = e.pageX - imageOffset.left;
    const yDiff = e.pageY - imageOffset.top;
    const maxX = maxImageWidth - imageSize.width;
    const maxY = maxImageHeight - imageSize.height;

    const xPos = Math.max(1, Math.min(maxX, (xDiff * (maxImageWidth / imageSize.width)) - xDiff));
    const yPos = Math.max(1, Math.min(maxY, (yDiff * (maxImageHeight / imageSize.height)) - yDiff));
    this.ui.zoomer.css({'transform': `translate( -${xPos}px, -${yPos}px)`});
  }
});
