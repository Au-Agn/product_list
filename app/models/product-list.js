import Backbone from 'backbone';

export const ProductsListModel = Backbone.Model.extend({
  defaults: {
    data: [
      {
        id: '1',
        name: 'Dress',
        description: 'The blue dress',
        price: {
          value: '200',
          currency: 'USD'
        },
        img: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
      }
    ]
  }
});
