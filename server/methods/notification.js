import { Meteor} from 'meteor/meteor';
import { Email } from 'meteor/email';
import { check } from 'meteor/check';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Invites from '/lib/collections/invites';
import Teams from '/lib/collections/teams';

import InviteMail from '/server/templates/invite';


Meteor.methods({
	InviteUser : function (email,teamID){
		check([email,teamID],[String]);
		this.undblock;

		Invites.insert({email : email,teams : [{team_id : teamID}]});

		//var mail = ReactDOMServer.renderToString(React.createElement(InviteMail));

		//console.log(mail);
		console.log(email,teamID);
		// Email.send({
		//   to: to,
		//   from: "gilles.manzato@gmail.com",
		//   subject: subject,
		//   html: text
		// });
	},
	setUserToTeams : function (){
		var user = Meteor.user();
		if(user){
			var invite = Invites.findOne({email : {$in :user.emailList()}});
			var ids = invite.teams.map(function(team){
				return team.team_id
			});
			console.log("ids" , ids);
			Teams.upsert(
				{_id : {$in : ids}},
				{
					$addToSet:
					{ users : { user : user._id , isAdmin : false }}
				}

			)

		}
	}
});
