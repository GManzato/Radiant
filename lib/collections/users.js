import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

Meteor.users.helpers({
	// Return an easy usable list for mongodb
	emailList : function(){
		emails = this.emails.map(function(email){
			return email.address
		});
		return emails;
	}

});