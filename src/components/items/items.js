import React from 'react'
import {MobileView, BrowserView} from "react-device-detect"
import Image from "./image";
import './items.css'

const Items = props => {
    return(
        <div>
            <BrowserView>
                <div className="item-container">
                    <Image src={props.img} alt={props.alt} mobile={false} popup={false}/>
                    <p className="item-text">{props.text}</p>
                </div>
            </BrowserView>
            <MobileView>
                <div className="item-container">
                    <Image src={props.img} alt={props.alt} mobile popup={false}/>
                    <p className="item-text">{props.text}</p>
                </div>
            </MobileView>
        </div>
    )
};

export default Items