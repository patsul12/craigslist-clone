import DS from 'ember-data';

export default DS.Model.extend({
    email: DS.attr(),
    phone: DS.attr(),
    title: DS.attr(),
    images: DS.attr(),
    price: DS.attr(),
    location: DS.attr(),
    body: DS.attr(),
    details: DS.attr(),
    category: DS.belongsTo('category', {async: true}),
    timestamp: DS.attr()
});
