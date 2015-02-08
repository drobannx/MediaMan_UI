import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.resource('tv-shows', { path: 'tv'});
  this.resource('music');
  this.resource('movies');
  this.resource('books');
});

export default Router;
