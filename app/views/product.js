import Marionette from 'backbone.marionette';
import productTemplate from '../server/views/partials/product.hbs';
import {ProductModel} from '../models/product';

export const ItemProductView = Marionette.ItemView.extend({
  template: productTemplate,

  ui: {
    'zoom': '.image'
  },

  events: {
    'mousemove @ui.zoom': 'onZoomProduct'
  },

  onZoomProduct: (e) => {
    const zoomer = e.currentTarget;
    let offsetX = e.offsetX;
    let offsetY = e.offsetY;
    let x = offsetX / zoomer.offsetWidth * 50;
    let y = offsetY / zoomer.offsetHeight * 50;
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
  },

  initialize: function() {
    this.model = new ProductModel();
  }
});
