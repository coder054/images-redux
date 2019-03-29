import React from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {login, isLoggedIn, logout} from './../modules/auth'



class Header extends React.Component {

	constructor(props) {
		super(props);
		console.log(this.props)
	}

	logout = ()=>{
		this.props.logout()
	}

	logIn = ()=>{
		console.log('logIn')
		this.props.login()
	}

	render() {
		return (
			<div className="Header-wr">
				<Link to="/" className="brand"> Image Storage </Link>
				<Link to="/"> Galleries </Link>
				<Link to="/upload"> Upload </Link>
				<Link to="/about"> Ablout </Link>
				
				{ this.props.isLoggedIn ? <a onClick={this.logout}> Logout </a> : null }

				{ !this.props.isLoggedIn ? <a onClick={this.logIn}> Login </a> : null }

			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	isLoggedIn: isLoggedIn(state)
  })
  
  const mapDispatchToProps = {
	login,
	logout
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Header)