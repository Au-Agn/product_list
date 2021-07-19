import Marionette from 'backbone.marionette';
import productTemplate from '../server/views/partials/product.hbs';
import {ProductModel} from '../models/product';

export const ItemProductView = Marionette.ItemView.extend({
  template: productTemplate,

  initialize: function() {
    this.model = new ProductModel();
  },

  ui: {
    'open': '#product'
  },

  events: {
    'click @ui.open': 'openProduct'
  },

  openProduct: () => {
    console.log('Product is open');
  }
});
