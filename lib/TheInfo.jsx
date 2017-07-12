'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TheInfoStyle from './TheInfoStyle'
import { htmlAttributesFor, eventHandlersFor } from 'the-component-util'

/**
 * Info of the-component
 */
class TheInfo extends React.PureComponent {
  render () {
    const s = this
    const { props } = s
    let {
      className,
      data,
      children
    } = props
    return (
      <div {...htmlAttributesFor(props, { except: [ 'className' ] })}
           {...eventHandlersFor(props, { except: [] })}
           className={classnames('the-info', className)}
      >
        {
          Object.keys(data || {}).map((label) => (
            <TheInfo.Row key={label}
                         label={label}
                         value={data[ label ]}
            >
            </TheInfo.Row>
          ))
        }
        {children}
      </div>
    )
  }

  static Row ({ label, value, className, children }) {
    return (
      <div className={classnames('the-info-row', className)}>
        <label className='the-info-row-label'>
          {label}
        </label>
        <div className='the-info-row-value'>
          {value}
        </div>
      </div>
    )
  }
}

TheInfo.Style = TheInfoStyle

TheInfo.propTypes = {
  /** Info data */
  data: PropTypes.Object
}

TheInfo.defaultProps = {
  data: {}
}

TheInfo.displayName = 'TheInfo'

export default TheInfo
