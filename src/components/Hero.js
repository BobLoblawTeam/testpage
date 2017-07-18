import React, {Component} from 'react';
import { Carousel } from 'react-responsive-carousel';
// carousel styles
import 'react-responsive-carousel/lib/styles/carousel.css';

class Hero extends Component {
    render() {
        return (
            <Carousel showArrows={true} infiniteLoop={true}>
                <div>
                    <img src="../batmobile1.jpg" />
                    <p className="legend">Batmobile Cruiser</p>
                </div>
                <div>
                    <img src="../batmobile2.jpg" />
                    <p className="legend">Batmobile Explorer</p>
                </div>
                <div>
                    <img src="../batmobile3.jpg" />
                    <p className="legend">Batmobile Future Concept</p>
                </div>
            </Carousel>
        );
    }
}

export default Hero;
