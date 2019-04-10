import React from 'react'
import requireAuth from './../HOCs/requireAuth'
import { Link, Route } from 'react-router-dom'

const Backend = props => (
	<h3>
		{' '}
		<a href="https://apidocs.imgur.com/">Imgur API</a>{' '}
	</h3>
)

const Frontend = props => <h3> React.js, Redux, React router </h3>

class About extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { match } = this.props
		console.log('match', match)
		return (
			<div>
				<h2> About </h2>

				<Route
					exact
					path={match.path}
					render={() => <p> Click for more detail: </p>}
				/>

				<Link to={`${match.url}/backend`}> Backend </Link>
				<Link to={`${match.url}/frontend`}> Frontend </Link>
				<Route path={`${match.path}/backend`} component={Backend} />
				<Route path={`${match.path}/frontend`} component={Frontend} />
			</div>
		)
	}
}

export default requireAuth(About)
