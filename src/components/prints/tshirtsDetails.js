import React, {useEffect, useState} from 'react'

import {tshirtRib, tshirtDark, tshirtGate} from '../../helpers/images'
import Nav from "../nav/nav";
import Popup from "reactjs-popup";
import {animated, useSpring} from "react-spring";

const TshirtsDetails = props => {

    const [id, setId] = useState(0);
    const [images, setImages] = useState([]);
    const [modalIndex, setModalIndex] = useState(0);

    const imports = [tshirtRib, tshirtDark, tshirtGate];
    const names = ['Rock In Bourlon', 'Darkspace', "Ëmgalaï's Gate"];

    const indexes = [
        [], //rib
        [0, 1], //darkspace
        [0, 1] //gate
    ];

    const smallIndexes = [
        [], //rib
        [], //darkspace
        [] //gate
    ];

    const sizes = [
        1, //rib
        2, //darkspace
        3, //gate
    ];

    useEffect(() => {
        setId(props.match.params.id);
        setImages(imports[id]);
    }, [id, imports, props.match.params.id]);

    const fade = useSpring({
        from: {opacity: 0,}, opacity: 1,
        config: {duration: 1000}
    });

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
        if (indexes[id].includes(index)) {
            return (
                <animated.div style={fade} key={index} className="portfolio-details-frame-med">
                    <Popup trigger={<img alt={index} src={item} className="portfolio-details-image"/>}
                           modal closeOnEscape onOpen={() => {
                        init(index)
                    }}>
                        <div className="modal-container">
                            {modalIndex === 0 ? <div className="left-placeholder"/> :
                                <div className="left-arrow" onClick={decrement}>PREV</div>}
                            <div className="modal">
                                <img alt={modalIndex} src={images[modalIndex]} className="modal-image"/>
                            </div>
                            {modalIndex === sizes[id] - 1 ? <div className="right-placeholder"/> :
                                <div className="right-arrow" onClick={increment}>NEXT</div>}
                        </div>
                    </Popup>
                </animated.div>
            )
        } else if (smallIndexes[id].includes(index)) {
            return (
                <animated.div style={fade} key={index} className="portfolio-details-frame-small">
                    <Popup trigger={<img alt={index} src={item} className="portfolio-details-image"/>}
                           modal closeOnEscape onOpen={() => {
                        init(index)
                    }}>
                        <div className="modal-container">
                            {modalIndex === 0 ? <div className="left-placeholder"/> :
                                <div className="left-arrow" onClick={decrement}>PREV</div>}
                            <div className="modal">
                                <img alt={modalIndex} src={images[modalIndex]} className="modal-image"/>
                            </div>
                            {modalIndex === sizes[id] - 1 ? <div className="right-placeholder"/> :
                                <div className="right-arrow" onClick={increment}>NEXT</div>}
                        </div>
                    </Popup>
                </animated.div>
            )
        } else {
            return (
                <animated.div style={fade} key={index} className={id === '6' ? "portfolio-details-frame" : "portfolio-details-frame-big"}>
                    <Popup trigger={<img alt={index} src={item} className="portfolio-details-image"/>}
                           modal closeOnEscape onOpen={()=>{init(index)}}>
                        <div className="modal-container">
                            {modalIndex===0 ? <div className="left-placeholder"/> : <div className="left-arrow" onClick={decrement}>PREV</div>}
                            <div className="modal">
                                <img alt={modalIndex} src={images[modalIndex]} className="modal-image"/>
                            </div>
                            {modalIndex===sizes[id]-1 ? <div className="right-placeholder"/> : <div className="right-arrow" onClick={increment}>NEXT</div>}
                        </div>
                    </Popup>
                </animated.div>
            )
        }
    };

    let img = images.map(mapper);

    return(
        <div>
            <Nav print/>
            <div className="portfolio-details">
                <h1>{names[id].toUpperCase()}</h1>
                <div className="portfolio-details-grid">
                    {img}
                </div>
            </div>
        </div>
    )
};

export default TshirtsDetails