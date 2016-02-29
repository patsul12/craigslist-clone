import Ember from 'ember';

export default Ember.Component.extend({
  showCategories: false,
  showPostForm: false,
  currentOverlord: null,
  currentCategory: null,

  actions: {
    showCategories(overlord) {
      this.set('showCategories', true);
      this.set('currentOverlord', overlord);
    },

    hideCategories() {
      this.set('showCategories', false);
    },

    showPostForm(category) {
      this.set('showPostForm', true);
      this.set('currentCategory', category);
    },

    createPost(params) {
      this.sendAction("createPost", params);
    }
  }
});
