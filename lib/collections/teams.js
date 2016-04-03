import { Mongo } from 'meteor/mongo';
import { Random } from 'meteor/random';


// Define a collection to hold tasks
const Teams = new Mongo.Collection("teams");

Teams.Schema = new SimpleSchema({
  /**
    ID
  */
  _id: {
    type: String,
    optional: false,
  },
  name : {
    type: String,
    optional: false,
  },
  createdAt : {
    type: Date,
    optional: false,
  },
  "users.$.user" : {
    type: String,
    optional: false,
  },
  "users.$.isAdmin" : {
    type: Boolean,
    optional: false,
  },
  "rooms.$._id" : {
    type: String,
    optional: false,
  },
  "rooms.$.name" : {
    type: String,
    optional: false,
  },  
});

Teams.attachSchema(Teams.schema);



Teams.publicFields = {
	_id:1,
	name:1
}

Meteor.methods({
	createTeam (name){
		Teams.insert({
			name : name,
			createdAt: new Date(),
			users: [
				{"user" : Meteor.userId() , "isAdmin" :true }
			],
			rooms: [
				{ _id : Random.id() , name : 'General' }
			]
		})
	},
	addRoom(team,roomName){
		Teams.update(
			{_id:team},
			{ $push: 
				{ rooms : { _id : Random.id() , name : roomName }}
			})
	}
});

export default Teams;