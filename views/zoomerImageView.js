import Marionette from 'backbone.marionette';
import zoomerImage from '../server/views/partials/zoomer.hbs';

export const ZoomerImageView = Marionette.ItemView.extend({
  template: zoomerImage,

  ui: {
    'zoom': '.image'
  },

  events: {
    'mousemove @ui.zoom': 'onZoomProduct'
  },

  onZoomProduct: (e) => {
    const zoomer = e.currentTarget;
    const offsetX = e.offsetX;
    const offsetY = e.offsetY;
    const x = offsetX / zoomer.offsetWidth * 100;
    const y = offsetY / zoomer.offsetHeight * 100;
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
  }
});
