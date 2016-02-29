import React from 'react';

class ChatForm extends React.Component {
	componentDidMount() {
		this.chats = this.props.model;
	}

	createChat(event) {
		event.preventDefault();
		console.log("Create Chat Called");

		let newReply = this.refs.newReply.value;
		let newUser = this.props.username;

		this.chats.addResource({
			reply: newReply,
			user: newUser
		})
	}

	render() {

	var chatinput = {
		position: 'fixed',
		bottom: 0,
		width: '100%',
		height: '80px',
		padding: '10px',
		backgroundColor: 'white'
	};

	var input = {
		height: '60px',
		width: '100%',
		fontFamily: 'sans-serif',
		padding: '10px',
		fontSize: '22px'
	}

		return (
			<div style={chatinput}>
				<form onSubmit={this.createChat.bind(this)}>
					<input placeholder="Chat away!" style={input} ref="newReply" />
				</form>
			</div>
		)
	}
}

export default ChatForm; 