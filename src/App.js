import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import heroImage from './images/batmobile-future-concept-6.jpg';
import Collapsible from 'react-collapsible';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
            <img src={heroImage} className="hero" alt="hero" />
        </p>
          <Collapsible trigger="Vehicle Specifications">
              <p>
                  <ul>
                      <li>Length: 396 in (33 feet) long</li>
                      <li>Height: 59.05 in (1.5 m)</li>
                  </ul>
              </p>
          </Collapsible>
      </div>
    );
  }
}

export default App;
