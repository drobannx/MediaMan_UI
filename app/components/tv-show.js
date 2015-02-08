import Ember from 'ember';
import ENV from '../config/environment.js';

export default Ember.Component.extend({
  posterImage: function() {
    var data = this.get('data');
    return 'http://image.tmdb.org/t/p/w500' + data.poster_path + '/?api_key=' + ENV.APP.Api_key;
  }.property('data.poster_path')
});
