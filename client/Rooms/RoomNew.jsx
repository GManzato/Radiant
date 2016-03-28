import React from 'react';
import { Meteor } from 'meteor/meteor';

import CstmInput from '/client/_Components/Input'

export default class TeamNew extends React.Component {
	submit(data){
		console.log(data);
		Meteor.call("addRoom",data.team,data.room);
		FlowRouter.go("/teams");
	}
	render(){
		return (
			<div>
				<a href="/teams"> Return</a>
				<Formsy.Form  onSubmit={this.submit}>
					<CstmInput name='room' type="text" title="Room Name" validations="isAlphanumeric" validationError="Team need to be alphanumeric" required />
					<CstmInput name='team' type="hidden" value={this.props.team} required />
					<button type="submit" className="btn btn-default">Submit</button>
				</Formsy.Form>
			</div>
		)
	}
}