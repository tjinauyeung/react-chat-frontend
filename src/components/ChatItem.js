import React from 'react';

class ChatItem extends React.Component {
	constructor() {
		super();
	}

    render() {
        var chatcontainer = {
        }

        var user = {
            display: 'inline-block',
            padding: '30px'
        }

        var avatar = {
            width: '50px',
            height: '50px',
            borderRadius: '50%'
        }

        var text = {
            display: 'inline-block',
        }

        return (
			<div style={chatcontainer}>
                <div style={user}>
                    <img style={avatar} src="http://s3-us-west-1.amazonaws.com/witty-avatars/default-avatar-2-l.jpg"/>
                </div>
                <div style={text}>
                <p> <strong> {this.props.user} </strong> | <em> {this.props.time} </em> </p>
                <p>{this.props.reply}</p>
                </div>
			</div>
        );
    }
}

export default ChatItem;