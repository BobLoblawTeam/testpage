import React, {Component} from 'react';
import './App.css';
import Collapsible from 'react-collapsible';
import Header from './components/Header';
import Hero from './components/Hero';


class App extends Component {
    render() {
        return (
            <div className="App">
                {/* Adding Header */}
                <Header/>

                {/* Adding Hero */}
                <Hero />

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
