import Marionette from 'backbone.marionette';
import Backbone from 'backbone'
import zoomerImage from '../views/partials/zoomer.hbs';

export const ZoomerImageView = Marionette.ItemView.extend({
  template: zoomerImage,
  model: new Backbone.Model({img: $('.wrap').attr('data-src')}),

  ui: {
    'zoom': '.image',
    'wrapImage': '.wrap'
  },

  events: {
    'mousemove @ui.zoom': 'onZoomProduct'
  },

  onRender(e) {
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
