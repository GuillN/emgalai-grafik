import React, {useEffect, useState} from 'react'
import {animated, useSpring} from "react-spring";
import ReactPlayer from "react-player";
import Popup from "reactjs-popup";
import back from "../../images/back.svg";
import next from "../../images/next.svg";
import Nav from "../nav/nav";

const ItemDetails = props => {

    const [id, setId] = useState(0);
    const [images, setImages] = useState([]);
    const [modalIndex, setModalIndex] = useState(0);

    useEffect(() => {
        setId(props.id);
        setImages(props.imports[id]);
    }, [id, props.id, props.imports]);

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
        if (props.indexes[id].includes(index)) {
            return (
                <animated.div style={fade} key={index} className="portfolio-details-frame-med">
                    <Popup trigger={<img alt={index} src={item} className="portfolio-details-image"/>}
                           modal closeOnEscape onOpen={() => {
                        init(index)
                    }}>
                        <div className="modal-container">
                            {modalIndex === 0 ? "" :
                                <img src={back} alt="back" className="left-arrow" onClick={decrement}/>}
                            <div className="modal">
                                <img alt={modalIndex} src={images[modalIndex]} className="modal-image"/>
                            </div>
                            {modalIndex === props.sizes[id] - 1 ? "" :
                                <img src={next} alt="next" className="right-arrow" onClick={increment}/>}
                        </div>
                    </Popup>
                </animated.div>
            )
        } else if (props.smallIndexes[id].includes(index)) {
            return (
                <animated.div style={fade} key={index} className="portfolio-details-frame-small">
                    <Popup trigger={<img alt={index} src={item} className="portfolio-details-image"/>}
                           modal closeOnEscape onOpen={() => {
                        init(index)
                    }}>
                        <div className="modal-container">
                            {modalIndex === 0 ? "" :
                                <img src={back} alt="back" className="left-arrow" onClick={decrement}/>}
                            <div className="modal">
                                <img alt={modalIndex} src={images[modalIndex]} className="modal-image"/>
                            </div>
                            {modalIndex === props.sizes[id] - 1 ? "" :
                                <img src={next} alt="next" className="right-arrow" onClick={increment}/>}
                        </div>
                    </Popup>
                </animated.div>
            )
        } else {
            return (
                <animated.div style={fade} key={index} className="portfolio-details-frame-big">
                    <Popup trigger={<img alt={index} src={item} className="portfolio-details-image"/>}
                           modal closeOnEscape onOpen={()=>{init(index)}}>
                        <div className="modal-container">
                            {modalIndex===0 ? "" : <img src={back} alt="back" className="left-arrow" onClick={decrement}/>}
                            <div className="modal">
                                <img alt={modalIndex} src={images[modalIndex]} className="modal-image"/>
                            </div>
                            {modalIndex===props.sizes[id]-1 ? "" : <img src={next} alt="next" className="right-arrow" onClick={increment}/>}
                        </div>
                    </Popup>
                </animated.div>
            )
        }
    };

    let img = images.map(mapper);
    const videoId = props.videos[id];
    const url = `https://www.facebook.com/emgalai/videos/${videoId}/`;

    return(
        <div>
            <Nav print/>
            <div className="portfolio-details">
                <h1>{props.names[id].toUpperCase()}</h1>
                {props.texts[id] == null ? "" : <p className="description">{props.texts[id]}</p>}
                <div className="portfolio-details-grid">
                    {img}
                    {videoId == null ? "" : <ReactPlayer className="portfolio-details-video" url={url} controls/>}
                </div>
            </div>
        </div>
    )
};

export default ItemDetails