import React, {Component} from 'react';
import './App.css';
import Collapsible from 'react-collapsible';
import Header from './components/Header';
import MainContent from './components/MainContent';

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* Adding Header */}
                <Header/>
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
                <MainContent/>
            </div>
        );
    }
}

export default App;
