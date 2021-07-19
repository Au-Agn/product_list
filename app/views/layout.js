import _ from 'underscore';
import Marionette from 'backbone.marionette';
import {ListProductsView} from './list-product';
import {NavigateView} from './navigate';

export const AppLayoutView = Marionette.LayoutView.extend({
  template: _.template(`
    <navigation id="menu">...</navigation>
    <article id="content">...</article>
  `),

  regions: {
    menu: '#menu',
    content: '#content'
  },

  onRender() {
    this.getRegion('menu').show(new NavigateView());
    this.getRegion('content').show(new ListProductsView());
  }
});

