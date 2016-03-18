import React from 'react';
import AccountsUIWrapper from './AccountsUIWrapper'
// define and export our Layout component
export const Layout = ({content}) => (
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
             <a className="navbar-brand" href="#">Meteor Slack</a>
          </div>
          {AccountsUIWrapper}
        </div>
      </nav>
      <div>{content}</div>
    </div>
);

// define and export our Welcome component
export const Welcome = ({name}) => (
    <div>
        Hello, {name}.
    </div>
);
