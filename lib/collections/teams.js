import { Mongo } from 'meteor/mongo';

// Define a collection to hold tasks
const Teams = new Mongo.Collection("teams");


Meteor.methods({
	createTeams (name){
		Teams.insert({
			name : name,
			createdAt: new Date()
		})
	}
});

export default Teams;