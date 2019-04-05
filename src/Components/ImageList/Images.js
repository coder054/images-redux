import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setReduxState } from './../../modules/helpers.js'
import { fetchImages, deleteImage, clickImage } from './../../modules/images.js'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Overdrive from 'react-overdrive'
class Images extends Component {
	async componentDidMount() {
		await this.props.fetchImages()
	}
	render() {
		console.log('this.props.isLoadingComplete ', this.props.isLoadingComplete)
		if (!this.props.isLoadingComplete) {
			return 'Loading...'
		} else if (!this.props.images.images.length) {
			return (
				<div className="letupload">
					{' '}
					Let's <Link to="/upload"> Upload </Link> some images!{' '}
				</div>
			)
		} else {
		}
		return (
			<div
				style={{ columnCount: `${this.props.images.numberOfColumns}` }}
				className="Images-wrapper">
				{this.props.images.images.map((image, index) => (
					<div className="one-img-wr" key={image.id}>
						<Overdrive id={`image-${image.id}`}>
							<img
								onClick={this.props.clickImage.bind(null, index)}
								src={image.link}
								alt={image.title}
							/>
						</Overdrive>
						<button
							onClick={e => {
								this.props.deleteImage(image.deletehash)
							}}
							className="button-medium button-danger title btn-delete"
							original-title="permanently delete images">
							{' '}
							<i className="fas fa-trash-alt" />
						</button>
					</div>
				))}
			</div>
		)
	}
}

const mapStateToProps = ({ images }) => ({
	images,
	isLoadingComplete: images.isLoadingComplete
})

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			setReduxState,
			fetchImages,
			deleteImage,
			clickImage
		},
		dispatch
	)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Images)
//////////////////////////////////////
