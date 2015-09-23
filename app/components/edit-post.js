import Ember from 'ember';

export default Ember.Component.extend({
  updateShowing: false,
  actions: {
    updateShow() {
      this.set('updateShowing', true);
    },
    deletePost(model) {
      if (confirm('Are you sure you want to delete this post?')) {
        this.sendAction('destroyPost', model);
      }
    },
    update(model) {
      var params = {
        title: this.get('title'),
        user: this.get('user'),
        body: this.get('body'),
        image: this.get('image'),
      };
      this.sendAction('update', model, params);
      this.set('updateShowing', false);
    }
  }
});
