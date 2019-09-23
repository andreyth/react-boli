import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import t from 'prop-types'

import { loadUser } from '~/actions/testAction'

const Teste = () => {
  const teste = useSelector(state => state.test.data)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('DISPAROU')
    dispatch(loadUser())
  }, [dispatch])

  return (
    <h1>Olá {teste}</h1>
  )
}

export default Teste

// Teste.propTypes = {
//   loadUser: t.func.isRequired,
//   teste: t.string.isRequired
// }

// const mapStateToProps = state => {
//   return {
//     teste: state.test.data
//   }
// }

// export default connect(mapStateToProps, { loadUser })(Teste)
