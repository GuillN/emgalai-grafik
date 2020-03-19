import React, {useEffect, useState} from 'react'
import {animated, useSpring} from "react-spring";
import Popup from "reactjs-popup";

import {logos} from '../../helpers/images'
import Nav from "../nav/nav";

const LogosDetails = props => {
    const [images, setImages] = useState([]);
    const [modalIndex, setModalIndex] = useState(0);

    useEffect(() => {
        setImages(logos);
    }, [], );

    const fade = useSpring({
        from: {opacity: 0,}, opacity: 1,
        config: {duration: 1000}
    });

    const size = 7;

    const init = index => {
        setModalIndex(index)
    };

    const increment = () => {
        setModalIndex(modalIndex+1)
    };

    const decrement = () => {
        setModalIndex(modalIndex-1)
    };

    const mapper = (item, index) => {
        return (
            <animated.div style={fade} key={index} className="portfolio-details-frame-big">
                <Popup trigger={<img alt={index} src={item} className="portfolio-details-image"/>}
                       modal closeOnEscape onOpen={()=>{init(index)}}>
                    <div className="modal-container">
                        {modalIndex===0 ? <div className="left-placeholder"/> : <div className="left-arrow" onClick={decrement}>PREV</div>}
                        <div className="modal">
                            <img alt={modalIndex} src={images[modalIndex]} className="modal-image"/>
                        </div>
                        {modalIndex===size-1 ? <div className="right-placeholder"/> : <div className="right-arrow" onClick={increment}>NEXT</div>}
                    </div>
                </Popup>
            </animated.div>
        )
    };

    let img = images.map(mapper);

    return (
        <div>
            <Nav/>
            <div className="portfolio-details">
                <h1>LOGOS</h1>
                <div className="portfolio-details-grid">
                    {img}
                </div>
            </div>
        </div>
    )
};

export default LogosDetails
