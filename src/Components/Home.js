import React from 'react';

import { connect } from 'react-redux'

class Home extends React.Component {


	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div> Home </div>
		);
	}
}





const mapStateToProps = (state) => ({
  auth: state.auth
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
