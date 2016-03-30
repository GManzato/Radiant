import { Meteor } from 'meteor/meteor';

import Invites from '/lib/collections/invites.js'

Meteor.publish('invites', () => Invites.find());