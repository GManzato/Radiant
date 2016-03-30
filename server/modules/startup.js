import { Meteor} from 'meteor/meteor' ;
import configureServices from '/server/modules/configure-service'

Meteor.startup(() => {
	configureServices();
  	process.env.MAIL_URL = Meteor.settings.private.smtp;
});

