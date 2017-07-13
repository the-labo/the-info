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
    contentWidth = ThemeValues.contentWidth,
    lightBackgroundColor = ThemeValues.lightBackgroundColor,
    lightTextColor = ThemeValues.lightTextColor,
    lightBorderColor = ThemeValues.lightBorderColor
  } = options
  return asStyleData('.the-info', {
    '&': {
      display: 'block',
      margin: '0 auto',
      maxWidth: contentWidth
    },
    '.the-info-header': {
      margin: 0,
      fontSize: 'small',
      backgroundColor: lightBackgroundColor,
      color: lightTextColor,
      padding: '1px 8px',
      borderBottom: `1px solid ${lightBorderColor}`,
      fontWeight: 'normal'
    },
    '.the-info-row': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: `1px solid ${lightBorderColor}`,
      padding: 4
    },
    '.the-info-row-label': {
      display: 'inline-block',
      padding: 4,
      fontSize: 'smaller',
      color: lightTextColor
    },
    '.the-info-row-value': {
      display: 'inline-block',
      padding: 4
    }
  })
}

export default TheInfoStyle
