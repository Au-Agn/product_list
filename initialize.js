import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import {ZoomerImageView} from './views/zoomerImageView';
import './styles/imageStyles.css';

const App = Marionette.Application.extend();

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();

  app.addRegions({
    zoomerImage: '#zoomer-image'
  });

  app.on('start', function() {
    Backbone.history.start();
  });
  app.start();

  app.zoomerImage.show(new ZoomerImageView());
});
