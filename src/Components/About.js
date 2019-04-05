import React from 'react'
import requireAuth from './../HOCs/requireAuth'

class About extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <div> About </div>
	}
}

export default requireAuth(About)
