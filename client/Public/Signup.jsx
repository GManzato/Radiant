import React from 'react';

export default class MessagesShow extends React.Component {

	facebookConnect() {
		console.log('click boom');
		Meteor.loginWithFacebook();
	};

	googleConnect(){
		console.log('google click');
	};

	render() {
		return (
			<div className="container">
				<h1>Welcome to Radiant</h1>
				<div className="socialConnect">
					<a href="#" onClick={this.facebookConnect} className="btn btn-primary">Connect with Facebook</a>
					<a href="#" onClick={this.googleConnect} className="btn btn-danger">Connect with Google</a>
				</div>
				<form action="" className="emailAuth">
					<input type="email"/>
				</form>

			</div>
			
		)
	}
}