import DS from 'ember-data';
import ENV from '../config/environment.js';

export default DS.RESTAdapter.extend({
  host: 'https://api.themoviedb.org',
  namespace: '3/tv/airing_today',
  buildURL: function(type, id, record) {
    var url = [];
    url.push(this.get('host'));
    url.push(this.get('namespace'));
    url = url.join('/');
    return url + '?api_key=' + ENV.APP.Api_key;
  }
});
