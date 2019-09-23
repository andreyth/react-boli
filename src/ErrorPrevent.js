import React, { PureComponent } from 'react'
import t from 'prop-types'

class ErrorPrevent extends PureComponent {
  state = { hasError: false }

  static getDerivedStateFromError () {
    return { hasError: true }
  }

  render () {
    if (this.state.hasError) {
      return <h1>Deu erro!</h1>
    }

    return this.props.children
  }
}

ErrorPrevent.propTypes = {
  children: t.object.isRequired
}

export default ErrorPrevent
