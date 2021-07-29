import Marionette from 'backbone.marionette';
import {ItemProductView} from './item-product';

export const ItemProductCollectionView = Marionette.CollectionView.extend({
  childView: ItemProductView
});
