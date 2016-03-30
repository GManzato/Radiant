import { Mongo } from 'meteor/mongo';

// Define a collection to hold tasks
const Invites = new Mongo.Collection("invites");

export default Invites;