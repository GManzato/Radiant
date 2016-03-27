import React from 'react';
import ReactDOM from 'react-dom';

import EmailForm from "/client/Public/Signup/EmailForm";

export default class MessagesShow extends React.Component {

	facebookConnect(event) {
		event.preventDefault();
		console.log('click boom');
		Meteor.loginWithFacebook();
	};

	googleConnect(){
		event.preventDefault();
		console.log('google click');
		Meteor.loginWithGoogle();
	};




	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<h2>Register with an email</h2>
						<EmailForm />
					</div>
					<div className="col-md-6">
						<h2>Register with a social media account</h2>
						<div className="socialConnect">
							<a href="#" onClick={this.facebookConnect} className="btn btn-primary">Connect with Facebook</a>
						</div>
						<div className="socialConnect">
							<a href="#" onClick={this.googleConnect} className="btn btn-danger">Connect with Google</a>
						</div>
					</div>
				</div>
			</div>
			
		)
	}
}