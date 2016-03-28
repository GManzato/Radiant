import { Meteor } from 'meteor/meteor';
import React from 'react';

import Messages from '/lib/collections/messages';
import { createContainer } from 'meteor/react-meteor-data';

import MessagesShow from '/client/Messages/MessagesShow';

Meteor.subscribe("messages");

export default createContainer(() => {
	console.log(this);
	return {
		messages : Messages.find({room_id:this.props.room}).fetch()
	}
},MessagesShow);

