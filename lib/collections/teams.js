import { Mongo } from 'meteor/mongo';
import { Random } from 'meteor/random';

// Define a collection to hold tasks
const Teams = new Mongo.Collection("teams");

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
		console.log(team);
		Teams.update(
			{_id:team},
			{ $push: 
				{ rooms : { _id : Random.id() , name : roomName }}
			})
	}
});

export default Teams;