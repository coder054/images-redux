import React from 'react';
import {Link} from 'react-router-dom'

export default class Header extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Header-wr">
				<Link to="/" className="brand"> Image Storage </Link>
				<Link to="/"> Galleries </Link>
				<Link to="/upload"> Upload </Link>
				<Link to="/about"> Ablout </Link>
				<Link to="/logout"> Logout </Link>
			</div>
		);
	}
}
