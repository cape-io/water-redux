import React from 'react'
import PropTypes from 'prop-types'

function Thingy({ toggleActive, isActive }) {
  const txt = 'toggle'
  return (
    <div>
      <h2>{isActive ? 'active' : 'not active'}</h2>
      <button onClick={toggleActive}>{txt}</button>
    </div>
  )
}

Thingy.propTypes = {
  isActive: PropTypes.bool.isRequired,
  toggleActive: PropTypes.func.isRequired,
}
export default Thingy
