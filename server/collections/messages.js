import { Meteor } from 'meteor/meteor';

import Messages from '/lib/collections/messages.js'

Meteor.publish('messages', () => Messages.find());