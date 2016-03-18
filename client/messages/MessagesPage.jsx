import { Meteor } from 'meteor/meteor';
import React from 'react';

import Messages from '/lib/collections/messages';
import { createContainer } from 'meteor/react-meteor-data';

import MessagesShow from './MessagesShow.jsx';


export default createContainer(() => {
	return {
		messages : Messages.find().fetch()
	}
},MessagesShow);

