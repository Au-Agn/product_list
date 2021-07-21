import _ from 'underscore';
import Marionette from 'backbone.marionette';
import {ListProductsView} from './list-product';
import {NavigateView} from './navigate';
import {ItemProductView} from './product';

export const AppLayoutView = Marionette.LayoutView.extend({
  template: _.template(`
    <navigation id="menu"></navigation>
    <article id="content"></article>
    <article id="item"></article>
  `),

  regions: {
    menu: '#menu',
    content: '#content',
    item: '#item'
  },

  onRender() {
    this.getRegion('menu').show(new NavigateView());
    this.getRegion('content').show(new ListProductsView());
    this.getRegion('item').show(new ItemProductView());
  }
});

