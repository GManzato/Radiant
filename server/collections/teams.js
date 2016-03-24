import { Meteor } from 'meteor/meteor';

import Teams from '/lib/collections/teams.js'

Meteor.publish('teams', () => Teams.find());