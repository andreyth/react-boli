import { Types } from '~/actions/authAction'

const INITIAL_STATE = {
  isAuthenticated: false,
  user: {}
}

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.SET_CURRENT_USER:
      return { isAuthenticated: !!Object.keys(action.payload).length, user: action.payload }
    default:
      return state
  }
}

export default authReducer
