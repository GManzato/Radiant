import { Meteor} from 'meteor/meteor' ;
import { Email } from 'meteor/email'
import { check } from 'meteor/check'

Meteor.methods({
	sendEmail : function (to,subject,text){
		check([to,subject,text],[String]);
		this.undblock;

		Email.send({
		  to: to,
		  from: "gilles.manzato@gmail.com",
		  subject: subject,
		  html: text
		});
	}

});
