import Marionette from 'backbone.marionette';
import productsListTemplate from '../server/views/partials/table.hbs';
import {ProductsListModel} from '../models/product-list';

export const ListProductsView = Marionette.ItemView.extend({
  template: productsListTemplate,

  ui: {
    'open': '#product'
  },

  events: {
    'click @ui.open': 'onOpenProduct'
  },

  onOpenProduct: () => {
    $('.table').hide();
    $('.item').show();
  },

  initialize: function() {
    this.model = new ProductsListModel();
  }
});
