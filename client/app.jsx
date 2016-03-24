import React from 'react';
import AccountsUIWrapper from './Accounts/AccountsUIWrapper'

// define and export our Layout component
export const Layout = ({content}) => (
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
             <a className="navbar-brand" href="#">Radiant</a>
          </div>
          <AccountsUIWrapper />
        </div>
      </nav>
      <div>{content}</div>
    </div>
);