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
    	var container = {
    		display: 'flex',
    		width: '100vw',
    		height: '100vh'
    	}

    	var sidebar = {
    		width: '400px'
    	}

    	var chat = {
    		width: '100%',
    	}

        return (
			<div style={container}>
				<div style={sidebar}>
				</div>
				<div style={chat}>
					<ChatList model={this.chats} />
					<ChatForm username={this.props.username} model={this.chats} />
				</div>
			</div>
        );
    }
}

export default ChatApp;