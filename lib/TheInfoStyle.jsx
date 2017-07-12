'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TheStyle from 'the-style'
import { asStyleData } from 'the-component-util'

/** Style for TheInfo */
const TheInfoStyle = ({ id, className, options }) => (
  <TheStyle { ...{ id } }
            className={ classnames('the-info-style', className) }
            styles={ TheInfoStyle.data(options) }
  />
)

TheInfoStyle.displayName = 'TheInfoStyle'
TheInfoStyle.propTypes = {
  /** Style options */
  options: PropTypes.object
}

TheInfoStyle.defaultProps = {
  options: {}
}

TheInfoStyle.data = (options) => {
  const { ThemeValues } = TheStyle
  let {
    dominantColor = ThemeValues.dominantColor,
    lightBorderColor = ThemeValues.lightBorderColor
  } = options
  return asStyleData('.the-info', {
    '&': {},
    '.the-info-row': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: `1px solid ${lightBorderColor}`
    },
    '.the-info-row-label': {
      display: 'inline-block'
    },
    '.the-info-row-value': {}
  })
}

export default TheInfoStyle
