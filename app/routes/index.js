import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.find('post', {
      orderBy: 'title'
    });
  },

  actions: {
    save(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    }
  }
});
