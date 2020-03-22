import React, {useState} from 'react'
import {MobileView, BrowserView} from "react-device-detect"
import LazyLoad from 'react-lazy-load'

const Items = props => {
    const [load, setLoad] = useState("loading");

    const handleLoaded = () => {
        setLoad("loaded")
    };

    return(
        <div>
            <BrowserView>
                <div className="portfolio-item">
                    {load === "loading" ? <div>Loading...</div> : ""}
                    <LazyLoad>
                        <img onLoad={handleLoaded} className="portfolio-item-image" src={props.img} alt={props.alt}/>
                    </LazyLoad>
                    <p className="portfolio-item-text">{props.text}</p>
                </div>
            </BrowserView>
            <MobileView>
                <div className="portfolio-item">
                    {load === "loading" ? <div>Loading...</div> : ""}
                    <LazyLoad>
                        <img onLoad={handleLoaded} className="portfolio-item-image-mobile" src={props.img} alt={props.alt}/>
                    </LazyLoad>
                    <p className="portfolio-item-text">{props.text}</p>
                </div>
            </MobileView>
        </div>
    )
};

export default Items