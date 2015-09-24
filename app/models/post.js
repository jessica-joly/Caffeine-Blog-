import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  title: DS.attr(),
  image: DS.attr(),
  body: DS.attr(),
  comments: DS.hasMany('comment', {async: true}),
  timestamp: DS.attr('number')
});
