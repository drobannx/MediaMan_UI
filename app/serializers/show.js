import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTSerializer.extend({
  normalizePayload: function(payload) {
    delete payload.page;
    delete payload.total_pages;
    delete payload.total_results;
    return payload
  },
  extractFindAll: function(store, type, payload, id, requestType) {
    var shows = payload.results;

    return Ember.ArrayPolyfills.map.call(shows, function(show) {
      return {
        id: show.id,
        name: show.name,
        posterPath: show.poster_path
      }
    });
  }
});
