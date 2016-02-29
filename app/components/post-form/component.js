import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    createPost() {
      var params = {
        email: this.get('email') || '',
        phone: this.get('phone') || '',
        title: this.get('title') || '',
        price: this.get('price') || '',
        location: this.get('location') || '',
        body: this.get('body') || '',
        images: this.get('images') || '',
        details: this.get('details') || '',
        category: this.get('category') || '',
        timestamp: new Date().getTime()
      }
      this.sendAction("createPost", params);
    }
  }
});
