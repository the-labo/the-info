'use strict'

import React from 'react'
import { TheInfo, TheInfoStyle } from 'the-info'

class ExampleComponent extends React.PureComponent {
  render () {
    return (
      <div>
        <TheInfoStyle/>
        <TheInfo data={{
          foo: 'bar',
          baz: <a>This is baz</a>
        }}>
        </TheInfo>
      </div>

    )
  }
}

export default ExampleComponent
