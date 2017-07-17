import React, {Component} from 'react';
import './App.css';
import Collapsible from 'react-collapsible';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <div className="headerTop">
                        <img src="./wayne_logo.png"/>
                        <h1>Wayne Automotive</h1>
                        <div className="cta">
                            <ul>
                                <li>Sales: 222-222-2222</li>
                                <li>Service: 222-222-2223</li>
                                <li>Locations</li>
                            </ul>
                        </div>
                    </div>
                    <ul>
                        <li>New Models</li>
                        <li>Pre-Owned</li>
                        <li>Specials</li>
                        <li>Service and Parts</li>
                        <li>Finance</li>
                        <li>About Us</li>
                    </ul>
                </header>
                <p className="App-intro">
                    <img src="./batmobile-future-concept-6.jpg" className="hero" alt="hero"/>
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
