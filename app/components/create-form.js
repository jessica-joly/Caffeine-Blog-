import Ember from 'ember';

export default Ember.Component.extend({
  formShowing:false,
  actions: {
    save() {
      var params = {
        title: this.get('title'),
        user: this.get('user'),
        body: this.get('body'),
        image: this.get('image')
      };
      this.sendAction('save', params);
    },

    formShow() {
      this.set('formShowing',true);
    }
  }
});
