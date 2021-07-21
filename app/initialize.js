import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import {AppLayoutView} from './views/layout';
import {Router} from './router';
import './styles/imageStyles.css';

const App = Marionette.Application.extend();

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.Router = new Router();

  app.addRegions({
    mainRegion: '#app'
  });
  app.mainRegion.show(new AppLayoutView());
  app.on('start', function() {
    Backbone.history.start();
  });
  app.start();
});
