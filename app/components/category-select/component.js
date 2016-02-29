import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showPostForm() {
      this.sendAction('showPostForm');
    }
  }
});
