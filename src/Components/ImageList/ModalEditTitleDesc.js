import React, { Component } from 'react'
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setReduxState } from '../../modules/helpers.js'
import { editTitleAndDesc, activeImage } from './../../modules/images'
import { Formik } from 'formik'

import * as Yup from 'yup'

class ModalEditTitleAndDesc extends Component {
	handleClose = () => {
		this.props.setReduxState('openStateForModalEditTitleAndDesc', false)
	}
	render() {
		const { name, views, title, description } = this.props.activeImage || ''
		const { bandwidth, datetime } = this.props
		console.log('test', this.props.activeImage ? this.props.activeImage.id : '')
		return (
			<div>
				<Modal
					className="modal-edit-wr"
					open={this.props.openStateForModalEditTitleAndDesc}
					onClose={this.handleClose}
					closeIcon>
					<div className="modal-header-formik">Edit Title and Description</div>

					<Modal.Content>
						<Formik
							initialValues={{
								myTitle:
									this.props.activeImage && this.props.activeImage.title
										? this.props.activeImage.title
										: '',
								myDesc:
									this.props.activeImage && this.props.activeImage.description
										? this.props.activeImage.description
										: ''
							}}
							onSubmit={(values, { setSubmitting }) => {
								this.props.editTitleAndDesc(
									this.props.activeImage.deletehash,
									values.myTitle,
									values.myDesc
								)
							}}
							validationSchema={Yup.object().shape({
								myTitle: Yup.string()
									.min(3, 'Title must be at leat 3 characters!')
									.max(40, 'Title must be smaller than 40 characters!')
									.required('Required'),
								myDesc: Yup.string()
									.min(3, 'Description must be at leat 3 characters!')
									.max(100, 'Description must be smaller than 100 characters!')
									.required('Required')
							})}>
							{props => {
								const {
									values,
									touched,
									errors,
									dirty,
									isSubmitting,
									handleChange,
									handleBlur,
									handleSubmit,
									handleReset
								} = props
								return (
									<form className="formik-wr" onSubmit={handleSubmit}>
										<label htmlFor="myTitle" style={{ display: 'block' }}>
											Title
										</label>

										<input
											id="myTitle"
											placeholder="Title"
											type="text"
											value={values.myTitle}
											onChange={handleChange}
											onBlur={handleBlur}
											className={
												errors.myTitle && touched.myTitle
													? 'text-input error'
													: 'text-input'
											}
										/>

										{errors.myTitle && touched.myTitle && (
											<div className="input-feedback">{errors.myTitle}</div>
										)}

										<label htmlFor="myDesc" style={{ display: 'block' }}>
											Title
										</label>
										<textarea
											id="myDesc"
											placeholder="Description"
											type="text"
											value={values.myDesc}
											onChange={handleChange}
											onBlur={handleBlur}
											className={
												errors.myDesc && touched.myDesc
													? 'text-input error'
													: 'text-input'
											}
										/>
										{errors.myDesc && touched.myDesc && (
											<div className="input-feedback">{errors.myDesc}</div>
										)}

										<button
											type="button"
											className="outline"
											onClick={handleReset}
											disabled={!dirty || isSubmitting}>
											Reset
										</button>
										<button type="submit" disabled={isSubmitting}>
											Submit
										</button>
									</form>
								)
							}}
						</Formik>
					</Modal.Content>
				</Modal>
			</div>
		)
	}
}

//////////////////////////////

const mapStateToProps = ({ images }) => ({
	openStateForModalEditTitleAndDesc: images.openStateForModalEditTitleAndDesc,
	activeImage: activeImage(images)
})

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			setReduxState,
			editTitleAndDesc
		},
		dispatch
	)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ModalEditTitleAndDesc)
//////////////////////////////////////
