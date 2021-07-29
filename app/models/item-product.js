import Backbone from 'backbone';

export const item = [
  {
    id: '11',
    name: 'Dress',
    description: 'The blue dress',
    price: {
      value: '200',
      currency: 'USD'
    },
    img: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
  },
  {
    id: '21',
    name: 'Dress',
    description: 'The blue dress',
    price: {
      value: '200',
      currency: 'USD'
    },
    img: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
  }
];

export const ItemPageModel = Backbone.Model.extend({});

export const ItemProductCollection = Backbone.Collection.extend({
  model: ItemPageModel,
  url: 'http://localhost:3000/productList'
});

