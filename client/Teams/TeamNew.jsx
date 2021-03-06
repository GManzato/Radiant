import React from 'react';
import { Meteor } from 'meteor/meteor';

import CstmInput from '/client/_Components/Input'

export default class TeamNew extends React.Component {
	submit(data){
		Meteor.call("createTeam",data.team);
		FlowRouter.go("/teams");
	}
	render(){
		return (
			<div>
				<a href="/teams"> Return</a>
				<Formsy.Form  onSubmit={this.submit}>
					<CstmInput name='team' type="text" title="Team Name" validations="isAlphanumeric" validationError="Team need to be alphanumeric" required />
					<button type="submit" className="btn btn-default">Submit</button>
				</Formsy.Form>
			</div>
		)
	}
}