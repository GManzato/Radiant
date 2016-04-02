import React from 'react';
import { Meteor } from 'meteor/meteor';



import Invites from '/lib/collections/invites';

import { createContainer } from 'meteor/react-meteor-data';

import InviteShow from './InviteShow.jsx';

Meteor.subscribe("teamsPublic");


export default createContainer((params) => {
	const { invite_id } = params;
	const InviteHandle = Meteor.subscribe("invites");
	const inviteReady = InviteHandle.ready();
	const invite = Invites.findOne({_id : invite_id});

	const isInvite = inviteReady && !! invite;
	return {
		inviteReady,
		invite,
		isInvite,
		teams : isInvite ? invite.teamsList() : []
	}

},InviteShow);