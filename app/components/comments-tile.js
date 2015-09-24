import Ember from 'ember';

export default Ember.Component.extend({
  updateCommentShowing: false,
  actions: {
    deleteComment(comment) {
      if (confirm('Are you sure you want to delete this comment?')) {
        this.sendAction('destroyComment', comment);
      }
    },
    updateComment(comment) {
      var params = {
        user: this.get('user'),
        body: this.get('body'),
      };
      this.sendAction('updateComment', comment, params);
      this.set('updateCommentShowing', false);
    },
    updateCommentShow() {
      this.set('updateCommentShowing', true);
    }
  }
});
