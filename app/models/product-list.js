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
        img: ''
      }
    ]
  }
});
