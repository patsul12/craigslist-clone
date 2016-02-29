import DS from 'ember-data';

export default DS.Model.extend({
  postingDetails: DS.attr(),
  posts: DS.hasMany('post', {async: true})  
});
