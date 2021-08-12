import Marionette from 'backbone.marionette';
import Cookies from 'js-cookie'
import zoomerImage from '../views/partials/zoomer.hbs';

export const ZoomerImageView = Marionette.ItemView.extend({
  template: zoomerImage,

  ui: {
    'container': '.zoomerContainer',
    'image': '.zoomerImage'
  },

  events: {
    'mousemove @ui.container': 'onZoomProduct'
  },

  onAttach() {
    const imageSrc = this.$el.parent().data('src');
    this.ui.container.css('background-image', `url(${imageSrc})`);
    this.ui.image.attr('src', imageSrc);
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

  onZoomWithTransform: (e) => {
    console.log('onZoomWithTransform');
  }
});
