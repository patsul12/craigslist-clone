import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    images: DS.attr(),
    price: DS.attr(),
    location: DS.attr(),
    description: DS.attr(),
    details: DS.attr(),
    contactInfo: DS.attr(),
    category: DS.belongsTo('category', {async: true}),
    timestamp: DS.attr()
});
