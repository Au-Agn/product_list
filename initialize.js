import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import {ZoomerImageView} from './clientViews/zoomerImageView';
import {BtnView} from './clientViews/btnView';
import {ShoppingCartView} from './clientViews/shoppingCartView';
import './styles/imageStyles.css';

const App = Marionette.Application.extend();

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();

  app.addRegions({
    zoomerImage: '#zoomer-image',
    button: '#button',
    cart: '#cart',
  });

  app.on('start', function() {
    Backbone.history.start();
  });
  app.start();

  app.cart.show(new ShoppingCartView());
  app.zoomerImage.show(new ZoomerImageView());
  app.button.show(new BtnView());
});
