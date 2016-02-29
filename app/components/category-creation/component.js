import Ember from 'ember';

export default Ember.Component.extend({
  showCreateCategory: false,
  showCreateCategoryOverlord: false,

  actions: {

    createCategory() {
      var params = {
        name: this.get('categoryName') || '',
        postingDetails: this.get('postingDetails') || '',
        categoryOverlord: this.get('categoryOverlord') || ''
      };
      this.set('showCreateCategory', false);
      this.set('categoryName', null);
      this.set('postingDetails', null);
      this.set('categoryOverlord', null);
      this.sendAction('createCategory', params);
    },

    createCategoryOverlord() {
      var params = {
        name: this.get('categoryOverlordName') || ''
      };
      this.set('showCreateCategoryOverlord', false);
      this.set('categoryOverlordName', null);
      this.sendAction('createCategoryOverlord', params);
    },

    showCreateCategory() {
      this.set('showCreateCategory', true);
    },

    hideCreateCategory() {
      this.set('showCreateCategory', false);
    },

    showCreateCategoryOverlord() {
      this.set('showCreateCategoryOverlord', true);
    },

    hideCreateCategoryOverlord() {
      this.set('showCreateCategoryOverlord', false);
    }
  }
});
