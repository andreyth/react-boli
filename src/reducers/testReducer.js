import { Types } from '~/actions/testAction'

const INITIAL_STATE = {
  data: 'casa'
}

const testReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.USER:
      return { ...state, data: action.payload }
    default:
      return state
  }
}

export default testReducer
