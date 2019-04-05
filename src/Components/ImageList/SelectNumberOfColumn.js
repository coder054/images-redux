import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setReduxState } from './../../modules/helpers.js'

class SelectNumberOfColumn extends Component {
	render() {
		console.log('this.props.length ', this.props.length)
		if (this.props.length >= 10) {
			return (
				<select
					value={this.props.numberOfColumns}
					onChange={e =>
						this.props.setReduxState('numberOfColumns', e.target.value)
					}
					name=""
					id="">
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
				</select>
			)
		} else {
			return null
		}
	}
}

//////////////////////////////

const mapStateToProps = ({ images }) => ({
	numberOfColumns: images.numberOfColumns,
	length: images.images.length
})

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			setReduxState
		},
		dispatch
	)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SelectNumberOfColumn)
//////////////////////////////////////
