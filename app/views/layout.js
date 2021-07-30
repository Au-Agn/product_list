import Marionette from 'backbone.marionette';
import {NavigateView} from './navigate';
import {ProductView} from './product';
import {ItemProductCollectionView} from './item-product-collection-view';
import {ItemProductCollection, item} from '../models/item-product';

export const AppLayoutView = Marionette.LayoutView.extend({

  regions: {
    menu: '#menu',
    table: '#tableBody',
    randomProduct: '#randomProduct'
  },

  onRender() {
    const myItemProductCollection = new ItemProductCollection(item);
    myItemProductCollection.fetch();
    const myItemProductCollectionView = new ItemProductCollectionView({collection: myItemProductCollection});
    this.getRegion('menu').show(new NavigateView());
    this.getRegion('table').show(myItemProductCollectionView);
    this.getRegion('randomProduct').show(new ProductView());
  }
});

