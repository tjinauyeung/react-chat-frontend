import React from 'react';
import ChatApp from './ChatApp';


class UserForm extends React.Component {
	constructor() {
		super();

		this.state = {
			username: "",
			avatar: ["http://s3-us-west-1.amazonaws.com/witty-avatars/default-avatar-4-l.jpg",
				"http://s3-us-west-1.amazonaws.com/witty-avatars/default-avatar-2-l.jpg",
				"http://s3-us-west-1.amazonaws.com/witty-avatars/default-avatar-3-l.jpg",
				"http://s3-us-west-1.amazonaws.com/witty-avatars/default-avatar-1-l.jpg" 
			]
		}
	}

	changeUserState(event){
		event.preventDefault();

		name = this.refs.newUser.value;

		this.setState({
			username: name
		})
	}

	chooseAvatar(event){
		event.preventDefault();
		let image = this.src;
		console.log(image);
	}

	render() {

		var style = {
			height: "100vh",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			color: 'white'
		}

		var input = {
			height: '60px',
			width: '300px',
			padding: '20px',
			background: 'none',
			border: '1px solid white',
			borderRadius: '8px',
			color: 'white',
			outline: 'none',
			fontFamily: 'helvetica',
			fontWeight: '100',
			fontSize: '14px'
		}

		var form = {
			width: '320px',
			textAlign: 'center'
		}

		var picture = {
			width: '50px',
			height: '50px',
			borderRadius: '50%',
			display: 'inline-block',
			margin: '10px'
		}

		if (this.state.username == "") {
			return (
				<div style={style}>
					<form style={form} onSubmit={this.changeUserState.bind(this)}>
						<h1>Welcome to Chatter</h1>
						<h4>Please enter a username:</h4>
						<input style={input} placeholder="Lebron James" ref="newUser" />
						<h4>Choose an avatar:</h4>

						{this.state.avatar.map(function(avatar,i) {
							return <img style={picture} onClick={this.chooseAvatar.bind(this)} src={avatar} />;
						}, this)}

						<h6>This is a demo app using React.js and Socket.io. Database provided by Mongo DB. Check out github for more info. <br />Made in Amsterdam. 2016</h6>
					</form>
				</div> )
		} else {
			return (
				<ChatApp username={this.state.username} avatar={this.state.avatar} />
			)
		}		
	}
}

export default UserForm; 