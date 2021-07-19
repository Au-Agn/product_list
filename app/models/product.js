import Backbone from 'backbone';

export const ProductModel = Backbone.Model.extend({
  defaults: {
    img: '',
    name: 'Dress',
    description: 'The blue dress',
    price: '200',
    currency: 'USD'
  }
});
