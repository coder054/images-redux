import React, { Component } from 'react'
import Images from './Images'
import ModalViewImage from './ModalViewImage.js'
import ModalEditTitleAndDesc from './ModalEditTitleDesc.js'
import SelectNumberOfColumn from './SelectNumberOfColumn'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { login } from './../../modules/auth'

class ImageList extends Component {
	render() {
		let html
		if (this.props.token) {
			html = (
				<div className="ImageList-wr">
					<SelectNumberOfColumn />
					<ModalViewImage />
					<ModalEditTitleAndDesc />
					<Images />
				</div>
			)
		} else {
			html = (
				<div className="needloginfirst">
					You need to
					<span onClick={e => this.props.login()} className="login">
						Login
					</span>
					first!
				</div>
			)
		}

		return html
	}
}

//////////////////////////////

const mapStateToProps = ({ auth }) => ({
	token: auth.token
})

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			login
		},
		dispatch
	)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ImageList)
//////////////////////////////////////
