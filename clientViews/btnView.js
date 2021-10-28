import Marionette from 'backbone.marionette';
import Radio from 'backbone.radio';
import template from '../views/partials/button.hbs'

export const BtnView = Marionette.ItemView.extend({
  template: template,

  ui: {
    button: '.btn-add'
  },

  events: {
    'click @ui.button': 'onAddProduct'
  },

  onAddProduct: () => {
    const channel = Radio.channel('shoppingCart');
    channel.trigger('add');
  }
});
