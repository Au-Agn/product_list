import Marionette from 'backbone.marionette';
import {ItemProductView} from './item-product';

export const ItemProductCollectionView = Marionette.CollectionView.extend({
  tagName: 'table',
  childView: ItemProductView,

  ui: {
    'open': '#item'
  },

  events: {
    'click @ui.open': 'onOpenProduct'
  },

  onOpenProduct: () => {
    $('.table').hide();
    $('.product').show();
  }
});
