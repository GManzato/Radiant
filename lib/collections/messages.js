import { Mongo } from 'meteor/mongo';

// Define a collection to hold tasks
const Messages = new Mongo.Collection("messages");


Meteor.methods({
  addMessage(text,room) {
    // Make sure the user is logged in before inserting a task
    // if (! Meteor.userId()) {
    //   throw new Meteor.Error("not-authorized");
    // }

    Messages.insert({
      text: text,
      room_id : room,
      createdAt: new Date(),
      userId: Meteor.userId(),
    });
  },
});


export default Messages;
