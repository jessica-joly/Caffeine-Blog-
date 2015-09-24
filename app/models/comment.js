import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  body: DS.attr(),
  timestamp: DS.attr('number'),
  post: DS.belongsTo('post', {async: true})
});
