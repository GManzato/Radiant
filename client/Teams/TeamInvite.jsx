import React from 'react';
import { Meteor } from 'meteor/meteor';

import CstmInput from '/client/_Components/Input'

export default class TeamInvite extends React.Component {
	constructor() {
	    super();
	    this.submit = this.submit.bind(this);
	}

	submit(data){
		Meteor.call('InviteUser',data.newUser,this.props.team,function(error,data){
			console.log(error,data);
		});
		//Meteor.call('sendEmail','gilles.manzato@gmail.com','test','hello world');
	}
	render(){
		return (
			<div>
				<a href="/teams"> Return</a>
				<Formsy.Form  onSubmit={this.submit}>
					<CstmInput name='newUser' type="email" title="User Email" validations="isEmail" validationError="Wrong email adress" required />
					<button type="submit" className="btn btn-default">Submit</button>
				</Formsy.Form>
			</div>
		)
	}
}