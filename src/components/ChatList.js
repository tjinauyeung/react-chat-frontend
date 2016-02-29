import React from 'react';
import ChatItem from './ChatItem';

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
		
		var chats = {
			height: 'calc(100vh - 80px)',
			overflowY: 'auto',
			overflowX: 'hidden',
			background: 'white',
		}

		return (
			<div style={chats} id="chatbox">
				{this.state.chats.map((chat) => {
					return (
							<ChatItem key={chat._id} time={chat.time} user={chat.user} reply={chat.reply} />
					);
				})}
			</div>
		)
	}
}

export default ChatList; 