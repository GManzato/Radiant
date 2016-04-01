import React from 'react';
import Meteor from 'meteor/meteor';


import CstmInput from '/client/_Components/Input'
class EmailForm extends React.Component {
	constructor() {
	    super();
	    this.submit = this.submit.bind(this);
	}
	submit(data){
		Accounts.createUser(data,(Error) => {
			if(Error) {
				console.log(Error);
			}
			else {
				FlowRouter.go('/');
			}
		});
	}
	render() {
		return (
				<Formsy.Form  onSubmit={this.submit}>
					 <CstmInput name='username' type="text" title="Username" validations={{ matchRegexp: /^[a-zA-Z][a-zA-Z0-9]*[._-]?[a-zA-Z0-9]+$/}} validationError="This is not a valid username" required />
					 <CstmInput name='password' type="password" title="Password" validations="minLength:6" validationError="Minimum 6 char" required />
					 <CstmInput name='confirm' type="password" title="Confirmation" validations="equalsField:password" validationError="Not equal" required />
					 <button type="submit" className="btn btn-default">Submit</button>
				</Formsy.Form>
		)
	}
}


export default EmailForm;