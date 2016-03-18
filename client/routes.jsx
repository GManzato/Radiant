import React from 'react';
import {mount} from 'react-mounter';
// load Layout and Welcome React components
import {Layout} from './app.jsx';
import MessagesPage from './messages/MessagesPage';

FlowRouter.route("/", {
  action() {
    mount(Layout, {
        content: (<MessagesPage />)
    });
  }
});
