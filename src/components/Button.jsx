import React from 'react'
import PropTypes from 'prop-types'

const Button = ({title, onClick}) => {
  return (
    <button 
      onClick = {onClick}>
      {title}
    </button>
  )
}


Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default Button




