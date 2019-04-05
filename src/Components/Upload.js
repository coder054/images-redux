import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { uploadImages } from './../modules/images.js'
import spinner from './spinner.gif'
import classNames from 'classnames'

class Upload extends React.Component {
	render() {
		return (
			<div
				className={classNames('upload-wr', {
					uploading: this.props.isUploading
				})}>
				<input
					disabled={this.props.isUploading}
					type="file"
					onChange={e =>
						this.props.uploadImages(e.target.files, this.props.history)
					}
					multiple
					accept="image/*"
				/>
				{!this.props.isUploading && <span>Drag images here!</span>}
				{this.props.isUploading ? (
					<div className="spinner-wr">
						<img src={spinner} alt="" />
					</div>
				) : null}
			</div>
		)
	}
}

//////////////////////////////

const mapStateToProps = ({ images }) => ({
	isUploading: images.isUploading
})

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			uploadImages
		},
		dispatch
	)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Upload)
//////////////////////////////////////
