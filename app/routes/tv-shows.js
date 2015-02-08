import Ember from 'ember';
import ENV from '../config/environment.js';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    var url = 'https://api.themoviedb.org/3/tv/airing_today?api_key=' + ENV.APP.Api_key;
    Ember.$.getJSON(url).then(function(data) {
        controller.set('shows', data.results);
    });
  }
});
