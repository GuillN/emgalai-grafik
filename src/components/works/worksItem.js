import React from 'react'
import {MobileView, BrowserView} from "react-device-detect"

const WorksItem = props => {
    return(
        <div>
            <BrowserView>
                <div className="portfolio-item">
                    <img className="portfolio-item-image" src={props.img} alt={props.alt}/>
                    <p className="portfolio-item-text">{props.text}</p>
                </div>
            </BrowserView>
            <MobileView>
                <div className="portfolio-item">
                    <img className="portfolio-item-image-mobile" src={props.img} alt={props.alt}/>
                    <p className="portfolio-item-text">{props.text}</p>
                </div>
            </MobileView>
        </div>
    )
};

export default WorksItem