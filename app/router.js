import Marionette from 'backbone.marionette';

export const Router = Marionette.AppRouter.extend({
  routes: {
    'products': 'showProductsList',
    'random-product': 'showProduct'
  },

  showProductsList: () => {
    console.log('showProductsList');
  },

  showProduct: () => {
    console.log('showProduct');
  },

  onRoute: function(name, path, args) {
    console.log('onRoute fired');
  }
});
