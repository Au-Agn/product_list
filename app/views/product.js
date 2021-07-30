import Marionette from 'backbone.marionette';
import {ProductModel} from '../models/product';

export const ProductView = Marionette.ItemView.extend({

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
  },

  initialize: function() {
    this.model = new ProductModel();
  }
});
