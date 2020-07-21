import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test'

class App extends Component {
  state = { num: [] }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          I was changed on the Feature branch
        </p>
        <button onClick={() => this.setState({ num: [...this.state.num, 0] })}>click to add</button>
        <button onClick={() => this.setState({ num: this.state.num.splice(1) })}>click to remove</button>
        {this.state.num.map((_, index) => (
          <Test key={index} />
        ))}

      </div>
    );
  }
}

export default App;
