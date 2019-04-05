import { combineReducers } from 'redux'
import counter from './counter'
import auth from './auth'
import images from './images'

export default combineReducers({
  counter,
  auth,
  images
})
