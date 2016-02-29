import React from 'react';
import ChatModel from './models/ChatModel';
import ChatForm from './components/ChatForm';
import ChatList from './components/ChatList';

class App extends React.Component {
	constructor() {
		super();

		this.chats = new ChatModel();
	}

    render() {
        return (
			<div>
				<ChatForm model={this.chats} />
				<ChatList model={this.chats} />
			</div>
        );
    }
}

export default App;