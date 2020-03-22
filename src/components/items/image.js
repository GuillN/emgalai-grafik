import React, {useState} from "react"
import LazyLoad from "react-lazy-load";

const Image = props => {
    const [load, setLoad] = useState("loading");

    const handleLoaded = () => {
        setLoad("loaded")
    };

    return (
        <div>
            {load === "loading" ? <div>Loading...</div> : ""}
            <LazyLoad>
                <img style={load === "loaded" ? {} : {display: 'none'}} onLoad={handleLoaded} alt={props.alt}
                     src={props.src}
                     className={props.mobile ? "portfolio-item-image-mobile" : props.popup ? "portfolio-details-image" : "portfolio-item-image"}/>
            </LazyLoad>
        </div>
    )
};

export default Image