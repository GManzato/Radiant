import React from 'react';
import AccountsUIWrapper from './Accounts/AccountsUIWrapper'

import Tether from 'tether';
// import all Bootstrap js plugins
import 'bootstrap';


// define and export our Layout component
export const Layout = ({content}) => (
    <div className="container-fluid">
      <nav className="navbar navbar-dark bg-inverse">
          <div className="navbar-header">
             <a className="navbar-brand" href="#">Radiant</a>
          </div>
          <AccountsUIWrapper />
      </nav>
      <div>{content}</div>
    </div>
);