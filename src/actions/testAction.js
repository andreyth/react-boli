export const Types = {
  USER: 'test/USER'
}

export const loadUser = () => {
  return {
    type: Types.USER,
    payload: 'ANDREY'
  }
}
