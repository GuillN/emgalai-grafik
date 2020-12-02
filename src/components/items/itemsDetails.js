import React, {useEffect, useState} from 'react'
import {animated, useSpring} from "react-spring";
import ReactPlayer from "react-player";
import Nav from "../nav/nav";
import PopupImage from "./popupImage";
import {MobileView, BrowserView} from "react-device-detect"

// This component displays formatted popup images from an image array
const ItemsDetails = props => {

    const [id, setId] = useState(0);
    const [client, setClient] = useState({});
    const [images, setImages] = useState([]);

    useEffect(() => {
        setId(props.id);
        setClient(props.array[Object.keys(props.array)[id]])
        setImages(props.array[Object.keys(props.array)[id]].images);
    }, [id, props.array, props.id]);

    const fade = useSpring({
        from: {opacity: 0,}, opacity: 1,
        config: {duration: 1000}
    });

    const mapper = (item, index) => {
        if (client.medIndex.includes(index)) {
            return <animated.div style={fade} key={index} className="details-frame-med">
                <PopupImage index={index} item={item} id={id} images={images} sizes={client.images.length}/>
            </animated.div>
    } else if (client.smallIndex.includes(index)) {
            return <animated.div style={fade} key={index} className="details-frame-small">
                <PopupImage index={index} item={item} id={id} images={images} sizes={client.images.length}/>
            </animated.div>
        } else {
            return <animated.div style={fade} key={index} className={client.title === 'Glazart' ? "details-frame-tiny" :
                "details-frame-big"}>
                <PopupImage index={index} item={item} id={id} images={images} sizes={client.images.length}/>
            </animated.div>
        }
    };

    const mobileMapper = (item, index) => {
        return <animated.div>
            <PopupImage index={index} item={item} id={id} images={images} sizes={client.images.length}/>
        </animated.div>
    }

    let img = images.map(mapper);
    let imgMobile = images.map(mobileMapper);
    const videoId = client.video;
    const url = `https://www.facebook.com/emgalai/videos/${videoId}/`;

    return <div>
        <Nav print={props.print}/>
        <div className="details-container">
            <h1>{client.title}</h1>
            {client.text == null ? "" : <p className="description">{client.text}</p>}
            <BrowserView>
                <div className="details-grid">
                    {img}
                    {videoId == null ? "" : <ReactPlayer className="details-video" url={url} controls/>}
                </div>
            </BrowserView>

            <MobileView>
                <div className="details-grid-mobile">
                    {imgMobile}
                    {videoId == null ? "" : <ReactPlayer className="details-video" url={url} controls/>}
                </div>
            </MobileView>
        </div>
    </div>
};

export default ItemsDetails
