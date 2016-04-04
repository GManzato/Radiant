import { Meteor } from 'meteor/meteor';

import Messages from '/lib/collections/messages.js';
import Teams from '/lib/collections/teams.js';

Meteor.publishComposite('messages', function(teamId,roomId) {

  return {
    find : function() {
    	const inTeam = Teams.find({ _id : teamId , 'users.user' : this.userId });
		return Messages.find({room_id : roomId});
    },

    children: [{
      find(message) {
        return Meteor.users.find({_id : message.userId},{fields: {
  			_id : 1,
  			username : 1
  		}})
      }
    }]
  };
});