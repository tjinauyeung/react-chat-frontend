import React from 'react';
import ChatApp from './ChatApp';


class UserForm extends React.Component {
	constructor() {
		super();

		this.state = {
			username: ""
		}
	}

	changeUserState(event){
		event.preventDefault();

		name = this.refs.newUser.value;

		this.setState({
			username: name
		})
	}

	render() {

		var style = {
			height: "100vh",
			display: "flex",
			justifyContent: "center",
			alignItems: "center"
		}

		if (this.state.username == "") {
			return (
				<div style={style}>
					<form onSubmit={this.changeUserState.bind(this)}>
						<h2>Enter your username</h2>
						<input placeholder="Enter username!" ref="newUser" />
					</form>
				</div> )
		} else {
			return (
				<ChatApp username={this.state.username} />
			)
		}		
	}
}

export default UserForm; 