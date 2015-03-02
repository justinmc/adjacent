/*
    View logic for the Chat page
 */

Meteor.startup(function() {
  Session.setDefault('chatMessageContent', '');

  Template.chat.events({
    'submit .form-message': function(event, template) {
      event.preventDefault();

      var messageContent = Session.get('chatMessageContent');

      Messages.insert({
        content: messageContent
      }, function() {
        Session.set('chatMessageContent', '');
      });
    },
    'input .message': function(event, template) {
      Session.set('chatMessageContent', event.target.value);
    }
  });

  Template.chat.helpers({
    messages: function() {
      return Messages.find().fetch().reverse();
    },
    messageContentPending: function() {
      return Session.get('chatMessageContent');
    }
  });
});
