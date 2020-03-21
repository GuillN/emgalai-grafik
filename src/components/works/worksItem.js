import React, {useState} from 'react'
import {MobileView, BrowserView} from "react-device-detect"
import LazyLoad from 'react-lazy-load'

const WorksItem = props => {
    const [load, setLoad] = useState("loading");

    const handleLoaded = () => {
        setLoad("loaded")
    };

    const handleFailed = () => {
        setLoad("failed")
    };

    return(
        <div>
            <BrowserView>
                <div className="portfolio-item">
                    {load === "loading" ?
                        <div>Loading</div> : ""}
                        <LazyLoad>
                            <img onLoad={handleLoaded} onError={handleFailed} className="portfolio-item-image"
                                 src={props.img} alt={props.alt}/>
                        </LazyLoad>
                    <p className="portfolio-item-text">{props.text}</p>
                </div>
            </BrowserView>
            <MobileView>
                <div className="portfolio-item">
                    <LazyLoad>
                        <img onLoad={handleLoaded} onError={handleFailed} className="portfolio-item-image-mobile"
                             src={props.img} alt={props.alt}/>
                    </LazyLoad>
                    <p className="portfolio-item-text">{props.text}</p>
                </div>
            </MobileView>
        </div>
    )
};

export default WorksItem