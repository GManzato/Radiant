import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';

export default class MessagesShow extends React.Component {

	renderMessages(){
		return this.props.messages.map((message) => {
			return (
				<Message key={message._id} message={message} />
			)
		});
	}

	submitMessage(e){
		e.preventDefault();
		var message = ReactDOM.findDOMNode(this.refs.newMessage).value;
		Meteor.call("addMessage", message , this.props.room);
		ReactDOM.findDOMNode(this.refs.newMessage).value = '';
	}

	render() {
		return (
			<div>
				<ul className="messageList">{this.renderMessages()}</ul>
				<form onSubmit={this.submitMessage.bind(this)}>
					<input ref="newMessage" type="text"/>
					<input type="submit"/>
				</form>
			</div>
			
		)
	}
}

MessagesShow.propTypes = {
  messages: React.PropTypes.array
};
