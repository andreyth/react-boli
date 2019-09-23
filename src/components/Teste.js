import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import t from 'prop-types'

import { loadUser } from '~/actions/testAction'

class Teste extends PureComponent {
  componentDidMount () {
    this.props.loadUser()
  }

  render () {
    return (
      <h1>Olá {this.props.teste}</h1>
    )
  }
}

Teste.propTypes = {
  loadUser: t.func.isRequired,
  teste: t.string.isRequired
}

const mapStateToProps = state => {
  return {
    teste: state.test.data
  }
}

export default connect(mapStateToProps, { loadUser })(Teste)
