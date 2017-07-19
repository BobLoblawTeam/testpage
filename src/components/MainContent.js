import React, {Component} from 'react';

class MainContent extends Component {
    render() {
        return (
            <section className="mainContent">
                <div className="text">
                    <h2>DEDICATED SERVICE EXPERTS</h2>
                    <p>
                        The expert team at Wayne Automotive is committed to caring for your vehicle for as long as you own it. We have state-of-the-art service facilities and use the latest diagnostics to maintain and repair your vehicle at a competitive price. We offer many convenient amenities such as Express Service to make your visit with us pleasurable. At Wayne Automative, we use only genuine Wayne Automative parts, so you can be sure your vehicle will perform as well as the day you got it.

                    </p>
                </div>
                <div className="media">
                    <img src="./car.jpg"/>
                </div>
            </section>
        );
    }
}

export default MainContent;

