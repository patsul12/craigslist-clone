import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('categoryOverlord');
  },

  actions: {
    createPost(params) {
      var newPost = this.store.createRecord("post", params);
      newPost.save();
      this.transitionTo('index');
    },
  }
});
