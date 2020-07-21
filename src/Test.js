import React, { Component } from 'react';
import memoize from 'lodash/memoize'

const test = memoize(() => {
  console.log('test 5')
  return 5
})

class Test extends Component {


  componentWillUnmount () {
    test.cache.clear()
  }

  render() {
    return (
      <div>
        {test()}
      </div>
    );
  }
}

export default Test;
