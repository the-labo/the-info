'use strict'

import React from 'react'
import { TheInfo, TheInfoStyle } from 'the-info'

class ExampleComponent extends React.PureComponent {
  render () {
    return (
      <div>
        <TheInfoStyle/>
        <TheInfo
          title="This is title"
          data={{
            row01: 'Text as row',
            row02: <a>Node as row</a>
          }}>
        </TheInfo>
      </div>

    )
  }
}

export default ExampleComponent
