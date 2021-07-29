import Marionette from 'backbone.marionette';
import template from '../server/views/partials/item.hbs';

export const ItemProductView = Marionette.ItemView.extend({
  id: 'item',
  template: template,
});
