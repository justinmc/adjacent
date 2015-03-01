/*
    The main entry point for the client side of the app
 */

// Create the needed collections on the client side
this.Messages = new Meteor.Collection('messages');

// Subscribe to the publishes in server/collections
Meteor.subscribe('messages');

// Start the app
Meteor.startup(function() {
  new Routes();
});
