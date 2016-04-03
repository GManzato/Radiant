import { Meteor } from 'meteor/meteor';

import Messages from '/lib/collections/messages.js'
import Teams from '/lib/collections/teams.js'

Meteor.publish('messages', function(team,room){
	const inTeam = Teams.find({ _id : team , 'users.user' : this.userId });
	return inTeam.count() ? Messages.find({room_id : room}) : [];
});