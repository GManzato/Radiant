import { Meteor } from 'meteor/meteor';

import Teams from '/lib/collections/teams.js'

Meteor.publish('teams', function (){
	return Teams.find( { 'users.user' : this.userId } );	
});


// Meteor.publish('teamsPublic', function(){
// 	return Teams.find({userId: {$exists: false}},{
// 		fields: Teams.publicFields
// 	})
// });
