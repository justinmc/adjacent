/*
    The messages collection

    content
    creator_user_id
    ctime
 */

var Messages = new Meteor.Collection('messages');

Meteor.publish('messages', function() {
  return Messages.find();
});

// Set permissions on this collection
Messages.deny({
  remove: function(userId, doc) {
    return false;
  },
  update: function(userId, doc) {
    return false;
  }
});
Messages.allow({
  insert: function(userId, doc) {
    doc.creator_user_id = userId;
    doc.ctime = new Date().getTime();
    return true;
  }
});
