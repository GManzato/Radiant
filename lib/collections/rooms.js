import { Mongo } from 'meteor/mongo';

// Define a collection to hold tasks
const Rooms = new Mongo.Collection("rooms");

export default Rooms;