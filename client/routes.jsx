import React from 'react';
import {mount} from 'react-mounter';

// load Layout and Welcome React components
import {Layout} from './app.jsx';

// Public Pages imports
import HomePage from './Public/HomePage';
import Signup from './Public/Signup';

// Logged Page imports
import TeamsPage from './Teams/TeamsPage';


// Group for public pages
LoggedOut = FlowRouter.group();

LoggedOut.route("/", {
  action() {
    mount(Layout, {
        content: (<HomePage />)
    });
  }
});

LoggedOut.route("/signup", {  
  action() {
    mount(Layout, {
        content: (<Signup />)
    });
  }
});

// Trigger for the logged group, for preventing access to unautorized users
LoggedIn = FlowRouter.group({
  triggersEnter : [
    function() {
      var route;
      if (!(Meteor.loggingIn() || Meteor.userId())) {
        route = FlowRouter.current();
        if (route.route.name !== 'login') {
          Session.set('redirectAfterLogin', route.path);
        }
        return FlowRouter.go('login');
      }
    }
  ]
});

LoggedIn.route("/teams", {
  action(){
    mount(Layout, {
        content: (<TeamsPage />)
    });
  }
});