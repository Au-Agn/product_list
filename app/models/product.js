import Backbone from 'backbone';

export const ProductModel = Backbone.Model.extend({
  defaults: {
    img: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
    name: 'Dress',
    description: 'The blue dress.Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    price: '200',
    currency: 'USD'
  }
});
