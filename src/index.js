import React from 'react'
import ReactDOM from 'react-dom'
// import jwtDecode from 'jwt-decode'
import { Provider } from 'react-redux'

// import requestAuth from '~/utils/requestAuth'
import App from '~/App'
import ErrorPrevent from '~/ErrorPrevent'
// import { setCurrentUser } from '~/actions/authAction'
import store from '~/store'

// if (window.localStorage.jwtToken) {
//   const token = window.localStorage.jwtToken
//   requestAuth(token)
//   store.dispatch(setCurrentUser(jwtDecode(token)))
// }

ReactDOM.render(
  <ErrorPrevent>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorPrevent>,
  document.getElementById('root')
)
