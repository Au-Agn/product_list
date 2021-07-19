import Marionette from 'backbone.marionette';
import productsListTemplate from '../server/views/partials/table.hbs';
import {ProductsListModel} from '../models/product-list';

export const ListProductsView = Marionette.ItemView.extend({
  template: productsListTemplate,

  initialize: function() {
    this.model = new ProductsListModel();
  }
});
