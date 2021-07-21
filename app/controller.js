import Marionette from 'backbone.marionette';

const MyController = Marionette.Controller.extend({
  onShowProductsList: () => {
    $('.first').addClass('is-active');
    $('.second').removeClass('is-active');
    $('.third').removeClass('is-active');
    $('.table').show();
    $('.item').hide();
  },
  onShowProduct: () => {
    $('.first').removeClass('is-active');
    $('.second').addClass('is-active');
    $('.third').removeClass('is-active');
    $('.table').hide();
    $('.item').show();
  },
  onShowAbout: () => {
    $('.first').removeClass('is-active');
    $('.second').removeClass('is-active');
    $('.third').addClass('is-active');
  }
});

export const myController = new MyController();

