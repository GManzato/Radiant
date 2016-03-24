// let startup = () => {
//   [...]
//   Modules.server.configureServices();
//   [...]
// };

// var _setBrowserPolicies = () => {
//   [...]
// };

// Modules.server.startup = startup;

import { Meteor} from 'meteor/meteor' ;
import configureServices from '/server/modules/configure-service'

Meteor.startup(() => {
	configureServices();
});

