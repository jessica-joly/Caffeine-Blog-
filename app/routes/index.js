import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.find('post', {
      orderBy: 'timestamp'
    });
  },

  actions: {
    save(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    },
    login: function() {
      this.get('session').authenticate('authenticator:firebase', {
          'email': this.get('email'),
          'password': this.get('password')
      }).then(function() {
          this.transitionToRoute('index');
      }.bind(this));
    },
    logout: function() {
        this.get('session').invalidate().then(function() {
            this.transitionToRoute('login');
        }.bind(this));
    }
  }
});
