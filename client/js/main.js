/*
    The main entry point for the client side of the app
 */

// Create the needed collections on the client side
this.Messages = new Mongo.Collection('messages', {
  // Add the creator username to the message
  transform: function(doc) {
    if (doc.creator_user_id === Meteor.userId()) {
      doc.creator = 'you';
    } else {
      doc.creator = 'someone else';
    }

    if (doc.ctime) {
      doc.ctime_formatted = new Date(doc.ctime).toLocaleString('en-US');
    }

    return doc;
  }
});

// Subscribe to the publishes in server/collections
Meteor.subscribe('messages');

// Start the app
Meteor.startup(function() {
  new Routes();
});
