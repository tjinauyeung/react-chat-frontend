import BaseModel from './BaseModel';

class ChatModel extends BaseModel {
	defaults() {
		return {
			reply: 'New Reply'
		};
	}
	constructor() {
		super('chat')
	}
}

export default ChatModel; 