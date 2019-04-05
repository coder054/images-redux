import { toast } from 'react-toastify'

export const setReduxState = (propertyName, value) => {
	return dispatch => {
		dispatch({
			type: 'SET_REDUX_STATE',
			propertyName,
			value
		})
	}
}

export const notify = notifyContent => {
	toast(notifyContent, {
		position: 'top-right',
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: false
	})
}
