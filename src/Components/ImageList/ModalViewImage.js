import React, { Component } from 'react'
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setReduxState } from '../../modules/helpers.js'
import Overdrive from 'react-overdrive'
import {
	activeImage,
	bandwidth,
	datetime,
	length
} from './../../modules/images'

class ModalViewImage extends Component {
	handleClose = () => {
		this.props.setReduxState('openStateForModalViewImage', false)
	}
	render() {
		const { name, views, title, description } = this.props.activeImage || ''
		const { bandwidth, datetime } = this.props
		let prevbtn = null
		if (this.props.index > 0) {
			prevbtn = (
				<i
					onClick={e => this.props.setReduxState('index', this.props.index - 1)}
					className="fas fa-chevron-left"
				/>
			)
		}

		let nextbtn = null
		if (this.props.index < this.props.length - 1) {
			nextbtn = (
				<i
					onClick={e => this.props.setReduxState('index', this.props.index + 1)}
					className="fas fa-chevron-right"
				/>
			)
		}

		return (
			<div>
				<Modal
					open={this.props.openStateForModalViewImage}
					onClose={this.handleClose}
					closeIcon>
					<div className="modal-header">
						<div className="one-info">
							<span className="label">Name</span>
							<span className="info"> {name} </span>
						</div>
						<div className="one-info">
							<span className="label">Views</span>
							<span className="info"> {views} </span>
						</div>
						<div className="one-info">
							<span className="label">Submitted</span>
							<span className="info"> {datetime} </span>
						</div>
						<div className="one-info">
							<span className="label">Bandwith</span>
							<span className="info"> {bandwidth} </span>
						</div>
					</div>
					<Modal.Content>
						<div className="modal-content">
							{prevbtn}
							<Overdrive
								id={`image-${
									this.props.activeImage ? this.props.activeImage.id : ''
								}`}>
								<img
									src={
										this.props.activeImage ? this.props.activeImage.link : ''
									}
									alt={
										this.props.activeImage ? this.props.activeImage.title : ''
									}
								/>
							</Overdrive>
							{nextbtn}
						</div>
					</Modal.Content>

					<div className="modal-footer">
						<div className="title-and-desc-wr">
							<div className="left">
								<p className="title-img"> {title} </p>
								<p className="desc-img"> {description} </p>
							</div>
						</div>
						<span
							onClick={e =>
								this.props.setReduxState(
									'openStateForModalEditTitleAndDesc',
									true
								)
							}
							className="edittitledesc">
							{' '}
							edit title/description{' '}
						</span>
					</div>
				</Modal>
			</div>
		)
	}
}

//////////////////////////////

const mapStateToProps = ({ images }) => ({
	openStateForModalViewImage: images.openStateForModalViewImage,
	activeImage: activeImage(images),
	bandwidth: bandwidth(images),
	datetime: datetime(images),
	index: images.index,
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
)(ModalViewImage)
//////////////////////////////////////
