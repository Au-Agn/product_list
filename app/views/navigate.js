import Marionette from 'backbone.marionette';
import navbarTemplate from '../server/views/partials/navbar.hbs';

export const NavigateView = Marionette.ItemView.extend({
  template: navbarTemplate
});
