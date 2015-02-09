import Ember from 'ember';
import ENV from '../config/environment.js';

export default Ember.Component.extend({
  classNames: ['col-lg-3', 'text-center'],
  posterImage: function() {
    var data = this.get('data');
    return 'http://image.tmdb.org/t/p/w500' + this.get('data.posterPath') + '/?api_key=' + ENV.APP.Api_key;
  }.property('data.posterPath'),
  actions: {
    info: function() {
      this.sendAction('info', this.get('data'));
    },
    follow: function() {
      this.sendAction('follow', this.get('data'));
    }
  }
});
