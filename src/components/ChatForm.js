import React from 'react';

class ChatForm extends React.Component {
	componentDidMount() {
		this.chats = this.props.model;
	}

	createChat(event) {
		event.preventDefault();
		console.log("Create Chat Called");

		let newReply = this.refs.newReply.value;
		this.chats.addResource({
			reply: newReply
		})
	}

	render() {
		return (
			<form onSubmit={this.createChat.bind(this)}>
				<input ref="newReply" />
				<button type="submit">Reply</button>
			</form>
		)
	}

export default ChatForm; 