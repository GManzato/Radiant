import React from 'react';
import ReactDOM from 'react-dom';

import InviteForm from "/client/Public/Signup/InviteForm";

export default class InviteShow extends React.Component {
	
	render () {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<h2>You are Invited to</h2>
						<InviteForm invite={this.props.invite} />
					</div>
				</div>
			</div>
		)
	}
}

InviteShow.propTypes = {
  invite: React.PropTypes.object,
};
