import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    info: function(show) {
      this.transitionToRoute('tv-show', show);
    },
    follow: function(show) {

    }
  }
});
