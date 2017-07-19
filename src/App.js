import React, {Component} from 'react';
import './App.css';
import Collapsible from 'react-collapsible';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Hero from './components/Hero';
import TabsModule from './components/Tabs';
import Footer from './components/Footer';


class App extends Component {
    render() {
        return (
            <div className="App">
                {/* Adding Header */}
                <Header/>

                {/* Adding Hero */}
                <Hero />
                <section className="paymentOptionsTabs">
                    <TabsModule/>
                </section>
                <MainContent/>

                {/* Adding Footer */}
                <Footer/>

            </div>
        );
    }
}

export default App;
