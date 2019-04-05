import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { login, isLoggedIn, logout } from './../modules/auth'

class Header extends React.Component {
	constructor(props) {
		super(props)
		console.log(this.props)
	}

	logout = () => {
		this.props.logout()
	}

	logIn = () => {
		this.props.login()
	}

	render() {
		return (
			<div className="Header-wr">
				<Link to="/" className="brand">
					{' '}
					Image Storage{' '}
				</Link>
				<Link to="/"> Galleries </Link>
				<Link to="/upload"> Upload </Link>
				<Link to="/about"> About </Link>
				<Link to="/public"> Public </Link>

				{this.props.isLoggedIn ? (
					<button className="logout-btn" onClick={this.logout}>
						{' '}
						Logout{' '}
					</button>
				) : null}

				{!this.props.isLoggedIn ? (
					<button className="login-btn" onClick={this.logIn}>
						{' '}
						Login{' '}
					</button>
				) : null}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	auth: state.auth,
	isLoggedIn: isLoggedIn(state)
})

const mapDispatchToProps = {
	login,
	logout
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header)
