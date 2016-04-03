import React from 'react';
import Moment from 'moment';


export default class Message extends React.Component {
	renderUsername() {
		const username = Meteor.users.findOne(this.props.message.userId).username;
		return (
			<span>{username} </span>
		)
	}

	renderDate() {
		const parsedDate = Moment(this.props.message.createdAt).format('hh:mm a');
		return (
			<span>{parsedDate} </span>
		)

	}
	render() {
		return (
			<li className="Message">
				{this.renderDate()	}
				{this.renderUsername()	}
				{this.props.message.text}
			</li>
		)
	}
}