import React from 'react';
import ChatModel from '../models/ChatModel';
import ChatForm from './ChatForm';
import ChatList from './ChatList';

class ChatApp extends React.Component {
	constructor() {
		super();

		this.chats = new ChatModel();
	}

    render() {
        return (
			<div>
				<ChatForm username={this.props.username} model={this.chats} />
				<ChatList model={this.chats} />
			</div>
        );
    }
}

export default ChatApp;