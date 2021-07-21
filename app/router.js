import Marionette from 'backbone.marionette';
import {myController} from './controller';

export const Router = Marionette.AppRouter.extend({
  controller: myController,
  appRoutes: {
    '': 'onShowProductsList',
    'products': 'onShowProductsList',
    'random-product': 'onShowProduct',
    'about': 'onShowAbout'
  }
});
