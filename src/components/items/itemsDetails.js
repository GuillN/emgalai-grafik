import React, {useEffect, useState} from 'react'
import {animated, useSpring} from "react-spring";
import ReactPlayer from "react-player";
import Nav from "../nav/nav";
import PopupImage from "./popupImage";

const ItemsDetails = props => {

    const [id, setId] = useState(0);
    const [images, setImages] = useState([]);

    useEffect(() => {
        setId(props.id);
        setImages(props.imports[id]);
    }, [id, props.id, props.imports]);

    const fade = useSpring({
        from: {opacity: 0,}, opacity: 1,
        config: {duration: 1000}
    });

    const mapper = (item, index) => {
        if (props.indexes[id].includes(index)) {
            return (
                <animated.div style={fade} key={index} className="portfolio-details-frame-med">
                    <PopupImage index={index} item={item} id={id} images={images} sizes={props.sizes}/>
                </animated.div>
            )
        } else if (props.smallIndexes[id].includes(index)) {
            return (
                <animated.div style={fade} key={index} className="portfolio-details-frame-small">
                    <PopupImage index={index} item={item} id={id} images={images} sizes={props.sizes}/>
                </animated.div>
            )
        } else {
            return (
                <animated.div style={fade} key={index} className={props.id === '6' ? "portfolio-details-frame" :
                    "portfolio-details-frame-big"}>
                    <PopupImage index={index} item={item} id={id} images={images} sizes={props.sizes}/>
                </animated.div>
            )
        }
    };

    let img = images.map(mapper);
    const videoId = props.videos[id];
    const url = `https://www.facebook.com/emgalai/videos/${videoId}/`;

    return(
        <div>
            <Nav print={props.print}/>
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

export default ItemsDetails