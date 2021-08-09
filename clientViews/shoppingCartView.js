import Marionette from 'backbone.marionette';
import Backbone from 'backbone'
import Radio from 'backbone.radio';
import template from '../views/partials/cart.hbs'

export const ShoppingCartView = Marionette.ItemView.extend({
  template: template,
  model: new Backbone.Model({count: localStorage.getItem('count')}),

  modelEvents: {
    'change:count': 'render'
  },

  initialize() {
    const channel = Radio.channel('shoppingCart');
    this.listenTo(channel, 'add', this.setCount);
  },

  setCount: function() {
    let count = this.model.get('count');
    count++;
    this.model.set('count', count);
    localStorage.setItem('count', count);
  }
});


