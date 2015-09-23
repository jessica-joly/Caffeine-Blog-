import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deletePost(model) {
      if (confirm('Are you sure you want to delete this post?')) {
        this.sendAction('destroyPost', model);
      }
    }
  }
});
