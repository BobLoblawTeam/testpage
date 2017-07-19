import React, {Component} from 'react';
import Collapsible from 'react-collapsible';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="headerTop">
                    <div className="logo-container">
                        <img src="./wayne_logo.png"/>
                        <h1>WAYNE AUTOMOTIVE</h1>
                    </div>
                    <div className="cta">
                        <ul>
                            <li>Sales: 222-222-2222</li>
                            <li>Service: 222-222-2223</li>
                            <li>Locations</li>
                        </ul>
                    </div>
                </div>
                <Collapsible trigger="Menu">
                    <ul>
                        <li>New Models</li>
                        <li>Pre-Owned</li>
                        <li>Specials</li>
                        <li>Service and Parts</li>
                        <li>Finance</li>
                        <li>About Us</li>
                    </ul>
                </Collapsible>
                <div className="navigation">
                    <ul>
                        <li>New Models</li>
                        <li>Pre-Owned</li>
                        <li>Specials</li>
                        <li>Service and Parts</li>
                        <li>Finance</li>
                        <li>About Us</li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;
