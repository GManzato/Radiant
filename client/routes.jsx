import React from 'react';
import {mount} from 'react-mounter';

// load Layout and Welcome React components
import {Layout} from './app.jsx';

// Public Pages imports
import HomePage from './Public/HomePage';
import Signup from './Public/Signup';
import InvitePage from './Public/InvitePage';

// Logged Page imports
import TeamsPage from './Teams/TeamsPage';
import TeamNew from './Teams/TeamNew';
import TeamInvite from './Teams/TeamInvite';

import RoomPage from './Rooms/RoomPage';
import RoomNew from './Rooms/RoomNew';


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

LoggedOut.route("/invite/:invite_id", {  
  action(params) {
    mount(Layout, {
        content: (<InvitePage invite_id={params.invite_id} />)
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

LoggedIn.route("/teams/new", {
  action(){
    mount(Layout, {
        content: (<TeamNew />)
    });
  }
});

LoggedIn.route("/team/:team/invite", {
    name: "NewRoom",
    action: function(params) {
        mount(Layout, {
          content: (<TeamInvite team={params.team} />)
        })
    }
})
LoggedIn.route("/team/:team/new", {
    name: "NewRoom",
    action: function(params) {
        mount(Layout, {
          content: (<RoomNew team={params.team} />)
        })
    }
})

LoggedIn.route("/team/:team/:room", {
    name: "Room",
    action: function(params) {
        mount(Layout, {
          content: (<RoomPage team={params.team} room={params.room} />)
        })
    }
})
