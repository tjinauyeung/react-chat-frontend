import React from 'react';

class ChatList extends React.Component {
	constructor() {
		super();

		this.state = {
			chats: []
		}
	}

	componentDidMount() {
		this.chats = this.props.model;
		this.chats.subscribe(this.updateList.bind(this));
	}

	updateList() {
		this.setState({
			chats: this.chats.resources
		});
	}

	render() {

		var style = {
			backgroundColor: 'white',
			padding: '20px',
			borderRadius: '5px',
		}

		var container = {
			margin: '20px'
		}

		var chats = {
			marginBottom: '80px'
		}

		return (
			<div style={chats}>
				{this.state.chats.map((chat) => {
					return (
						<div style={container}>
							<p><strong>{chat.user}</strong></p>
							<div style={style} key={chat._id}>{chat.reply}</div>
						</div>
					);
				})}
			</div>
		)
	}
}

export default ChatList; 