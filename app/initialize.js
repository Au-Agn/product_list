import Marionette from 'backbone.marionette';
import {AppLayoutView} from './views/layout';
// import {Router} from './router';

const App = Marionette.Application.extend();

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  // const router = new Router();

  app.addRegions({
    mainRegion: '#app'
  });
  app.mainRegion.show(new AppLayoutView());
  // router.appRoute('products', () => (console.log(11)));
  app.start();
});
