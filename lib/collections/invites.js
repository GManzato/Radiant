import { Mongo } from 'meteor/mongo';
import Teams from '/lib/collections/teams';

// Define a collection to hold tasks
const Invites = new Mongo.Collection("invites");

Invites.helpers({
	teamsList : function(){
		ids = this.teams.map(function(team){
			return team.team_id
		});
		return Teams.find({_id : {$in: ids}}).fetch();
	}
});

export default Invites;