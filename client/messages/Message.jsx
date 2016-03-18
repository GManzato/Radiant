import React from 'react';

export default class Message extends React.Component {
	render() {
		return (
			<li className="Message">{this.props.message.text}</li>
		)
	}
}