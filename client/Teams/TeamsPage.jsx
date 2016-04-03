import { Meteor } from 'meteor/meteor';
import React from 'react';

import Teams from '/lib/collections/teams';
import { createContainer } from 'meteor/react-meteor-data';

import TeamShow from './TeamsShow.jsx';



export default createContainer(() => {
	Meteor.subscribe("teams");
	return {
		teams : Teams.find().fetch()
	}
},TeamShow);

