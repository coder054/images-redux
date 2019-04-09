import api from './../api/imgur'
import { createSelector } from 'reselect'
import { updateObject } from './../helpers/reduxHelpers'
import { getdateAndTimeFromDateString } from './../helpers/helper'
import { notify } from './helpers'

export const SET_UPLOADING = 'images/SET_UPLOADING'

const token = state => !!state.auth.token

// test purpose
export const isLoggedIn = createSelector(
  [token],
  token => {
    return !!token
  }
)
////////////////////////////////////////////

const images = state => state.images
const index = state => state.index
export const length = images => (images ? images.length : 0)

export const activeImage = createSelector(
  [images, index],
  (images, index) => {
    return images[index]
  }
)

export const bandwidth = createSelector(
  [activeImage],
  activeImage => {
    if (!activeImage || !activeImage.bandwidth) return ''
    let x = (activeImage.bandwidth / 1024 / 1024).toFixed(2)
    return x.toString() + ' MB'
  }
)

export const datetime = createSelector(
  [activeImage],
  activeImage => {
    if (!activeImage || !activeImage.datetime) return ''
    let datetimeString = activeImage.datetime
    return getdateAndTimeFromDateString(datetimeString)
  }
)

////////////////////////////////////////////

const initialState = {
  isUploading: false,
  numberOfColumns: 4,
  images: [],
  isLoadingComplete: false,
  bandwidth: 0,
  datetime: 0,
  openStateForModalViewImage: false,
  deletehash: '',
  openStateForModalEditTitleAndDesc: false,
  title: '',
  description: '',
  index: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_UPLOADING:
      return updateObject(state, { isUploading: action.isUploading })
    case 'SET_REDUX_STATE':
      return updateObject(state, { [action.propertyName]: action.value })
    default:
      return state
  }
}

export const login = () => {
  return dispatch => {
    api.login()

    // dispatch({
    //   type: INCREMENT_REQUESTED
    // })

    // dispatch({
    //   type: INCREMENT
    // })
  }
}

export const uploadImages = (images, history) => {
  return async (dispatch, getStates) => {
    dispatch({ type: SET_UPLOADING, isUploading: true })
    const token = getStates().auth.token

    console.log('images', images)

    const imagesOnly = Array.from(images).filter(image =>
      image.type.includes('image/')
    )

    await api.uploadImages(imagesOnly, token)

    dispatch({ type: SET_UPLOADING, isUploading: false })
    history.push('/')
  }
}

export const fetchImages = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: 'SET_REDUX_STATE',
      propertyName: 'isLoadingComplete',
      value: false
    })
    const token = getState().auth.token
    let images = await api.fetchImages(token)
    dispatch({
      type: 'SET_REDUX_STATE',
      propertyName: 'images',
      value: images.data.data
    })

    dispatch({
      type: 'SET_REDUX_STATE',
      propertyName: 'isLoadingComplete',
      value: true
    })
  }
}

export const deleteImage = deleteHash => {
  return async (dispatch, getState) => {
    const token = getState().auth.token

    if (window.confirm('Are you sure you want to delete this image?')) {
      await api.deleteImage(deleteHash, token)

      let newImagesList = getState().images.images.filter(
        image => image.deletehash !== deleteHash
      )

      dispatch({
        type: 'SET_REDUX_STATE',
        propertyName: 'images',
        value: newImagesList
      }) // xxx dispatch a thunk from an action
      notify('Delete image Sucefully!')
    } else {
    }
  }
}

export const clickImage = index => {
  return async (dispatch, getState) => {
    dispatch({
      type: 'SET_REDUX_STATE',
      propertyName: 'index',
      value: index
    })

    dispatch({
      type: 'SET_REDUX_STATE',
      propertyName: 'openStateForModalViewImage',
      value: true
    })
  }
}

export const editTitleAndDesc = (imageHash, title, description) => {
  return async (dispatch, getState) => {
    const { token } = getState().auth
    console.log('title', title)
    console.log('description', description)
    await api.editTitleAndDesc(imageHash, title, description, token)
    dispatch(fetchImages())
    setTimeout(() => {
      dispatch({
        type: 'SET_REDUX_STATE',
        propertyName: 'openStateForModalEditTitleAndDesc',
        value: false
      })
    }, 200)
  }
}
