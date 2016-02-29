import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('categoryOverlord');
  },

  actions: {
    createCategory(params) {
      var newCategory = this.store.createRecord('category', params);
      var categoryOverlord = params.categoryOverlord;
      categoryOverlord.get('categories').addObject(newCategory);
      newCategory.save().then(function() {
        return categoryOverlord.save();
      });
      this.transitionTo('admin');
    },

    createCategoryOverlord(params) {
      var newCategoryOverlord = this.store.createRecord('categoryOverlord', params);
      newCategoryOverlord.save();
      this.transitionTo('admin');
    }
  }
});
