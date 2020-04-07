import React, { Component } from 'react';
import Myname from './Myname'
import MyNickname from './MyNickname'

class App extends Component {
  render() {
    return (
      <div>
        <Myname name='이종호' />
        <MyNickname />
      </div>
    );
  }
}

export default App;