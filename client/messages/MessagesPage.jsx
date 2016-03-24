import { Meteor } from 'meteor/meteor';
import React from 'react';

import Messages from '/lib/collections/messages';
import { createContainer } from 'meteor/react-meteor-data';

import MessagesShow from './MessagesShow.jsx';

Meteor.subscribe("messages");

export default createContainer(() => {
	return {
		messages : Messages.find().fetch()
	}
},MessagesShow);

