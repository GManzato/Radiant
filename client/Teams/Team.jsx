import React from 'react';

export default class Team extends React.Component {
	render() {
		return (
			<li className="Team"><a href={'/team/'+ this.props.team._id+ '/' + this.props.team.rooms[0]._id}>{this.props.team.name}</a> <a href="#">edit</a> <a href={'/team/'+ this.props.team._id+'/new'}>Add Room</a></li>
		)
	}
}