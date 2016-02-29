import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showPostForm(category) {
      this.sendAction('showPostForm', category);
    }
  }
});
