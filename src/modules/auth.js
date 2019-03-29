import api from './../api/imgur'
import qs from "qs"
import { push } from 'connected-react-router'
import { createSelector } from 'reselect'



import {updateObject} from './../helpers/reduxHelpers'

export const LOGIN = 'auth/INCREMENT_REQUESTED'
export const LOGOUT = 'auth/INCREMENT'
export const SET_TOKEN = 'auth/SET_TOKEN'


const token = state => !!state.auth.token

// test purpose
export const isLoggedIn = createSelector(
  [ token ],
  (token) => {
    return !!token
  }
)

const initialState = {
  token: window.localStorage.getItem("imgur_token"),
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return updateObject(state, {token: action.token})
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

export const logout = () => {
  return dispatch => {
		dispatch({
      type: SET_TOKEN,
      token: null
    }) // the second parameter is the data of mutation
		window.localStorage.removeItem("imgur_token")
		push("/")
  }
}

export const finalizeLogin = (hash, history) => {
  return dispatch => {
    const query = qs.parse(hash.replace("#", ""))
    console.log(query)
    dispatch({
      type: SET_TOKEN,
      token: query.access_token
    })
		window.localStorage.setItem("imgur_token", query.access_token)
		history.push("/")
  }
}
