import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import heroImage from './images/batmobile-future-concept-6.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
            <img src={heroImage} className="hero" alt="hero" />
        </p>
      </div>
    );
  }
}

export default App;
