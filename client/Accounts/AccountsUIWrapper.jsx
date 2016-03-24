import React from 'react';
import ReactDOM from 'react-dom';

export default class AccountsUIWrapper extends React.Component {
  componentDidMount() {
    // Use Meteor Blaze to render login buttons
    this.view = Blaze.render(Template._loginButtons,
      ReactDOM.findDOMNode(this.refs.login));
  }

  componentWillUnmount() {
    // Clean up Blaze view
    Blaze.remove(this.view);
  }

  render() {
    // Just render a placeholder container that will be filled in
    return <ul className="nav navbar-nav navbar-right" ref="login" />;
  }

};
