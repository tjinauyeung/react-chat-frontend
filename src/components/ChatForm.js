import React from 'react';

class ChatForm extends React.Component {
	componentDidMount() {
		this.chats = this.props.model;
	}

	currentTime() {
		let hours = new Date().getHours();
		let minutes = new Date().getMinutes();
		minutes = minutes > 9 ? minutes : '0' + minutes;
		let time = hours + ":" + minutes;
		return time;
	}

	scrollToBottom(){
		var box = document.getElementById('chatbox');
		box.scrollTop = box.scrollHeight;
	}

	createChat(event) {
		event.preventDefault();
		console.log("Create Chat Called");

		let newReply = this.refs.newReply.value;
		let newUser = this.props.username;
		let newTime = this.currentTime();

		this.chats.addResource({
			reply: newReply,
			user: newUser,
			time: newTime
		})

		this.refs.newReply.value= "";
		scrollToBottom();
	}

	render() {

	var chatinput = {
		height: '80px',
		padding: '10px',
		backgroundColor: 'white'
	};

	var input = {
		height: '60px',
		width: '100%',
		fontFamily: 'sans-serif',
		padding: '10px',
		fontSize: '22px',
		color: 'black',
		fontWeight: '100',
		outline: 'none'
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