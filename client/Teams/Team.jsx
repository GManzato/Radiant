import React from 'react';

export default class Team extends React.Component {
	renderRooms() {
		return this.props.team.rooms.map((room) => {
			return (
				<li key={room._id}><a href={'/team/'+ this.props.team._id+ '/' + room._id}>{room.name}</a></li>
			)
		});
	}
	render() {
		return (
			<li className="Team">
				<a href={'/team/'+ this.props.team._id+ '/' + this.props.team.rooms[0]._id}>{this.props.team.name}</a>  
				<a className="btn btn-primary" href="#">Edit</a> 
				<a className="btn btn-primary" href={'/team/'+ this.props.team._id+'/new'}>Add Room</a>
				<a className="btn btn-primary" href={'/team/'+ this.props.team._id+'/invite'}>Invite User</a>
				<ul>{this.renderRooms()}</ul>
			</li>
				
		)
	}
}