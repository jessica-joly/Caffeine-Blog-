import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment() {
      var params = {
        user: this.get('user'),
        body: this.get('body'),
        timestamp: new Date().getTime(),
        post: this.get('model')
      };
      this.sendAction('saveComment', params);
    }
  }
});
