import axios from 'axios'
import jwtDecode from 'jwt-decode'

import requestAuth from '~/utils/requestAuth'

export const Types = {
  SET_CURRENT_USER: 'teste/SET_CURRENT_USER'
}

export const setCurrentUser = (user) => {
  return {
    type: Types.SET_CURRENT_USER,
    payload: user
  }
}

export const login = (data) => async (dispatch) => {
  const res = await axios.get('/api/login')
  const token = res.data.token
  window.localStorage.setItem('token', token)
  requestAuth(token)
  dispatch(setCurrentUser(jwtDecode(token)))
}

export const logout = () => (dispatch) => {
  window.localStorage.removeItem('token')
  requestAuth(false)
  dispatch(setCurrentUser({}))
}
