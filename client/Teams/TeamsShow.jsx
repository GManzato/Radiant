import React from 'react';
import ReactDOM from 'react-dom';

import Team from './Team';

export default class TeamsShow extends React.Component {
	renderTeams(){
		return this.props.teams.map((team) => {
			return (
				<Team key={team._id} team={team} />
			)
		});
	}

	render() {
		return (
			<div>
				<a className="btn btn-primary" href="/teams/new" role="button">Create a new team</a>
				<h2>Teams : </h2>
				<ul className="teamList">{this.renderTeams()}</ul>
			</div>

		)
	}
}

TeamsShow.propTypes = {
  teams: React.PropTypes.array
};
