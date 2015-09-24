import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    destroyPost(model) {
      model.get('comments').forEach(function(comment) {
        comment.destroyRecord();
      });
      model.destroyRecord();
      this.transitionTo('index');
    },

    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      newComment.save();
      params.post.save();
      this.transitionTo('post', params.post);
      location.reload();
     },

     destroyComment(comment) {
       comment.destroyRecord();
       this.transitionTo('post')
     },

    update(model, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          model.set(key, params[key]);
        }
      });
      model.save();
      this.transitionTo('post');
    }
  }
});
