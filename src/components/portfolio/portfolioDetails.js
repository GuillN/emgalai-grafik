import React, {useEffect, useState} from 'react'
import { Carousel } from "react-responsive-carousel"
import {MobileView, BrowserView} from "react-device-detect"
import {logos, posters, aluk, conan, darkspace, escarion, glazart, goblin, hifi, king, metalorgie, mysticum,
    rio, sunn, ulver} from '../../helpers/images'
import Nav from "../nav/nav";
import ReactPlayer from "react-player";

const PortfolioDetails = props => {

    const [id, setId] = useState(0);
    const [images, setImages] = useState([]);
    const imports = [logos, posters, aluk, conan, darkspace, escarion, glazart, goblin, hifi, king, metalorgie,
        mysticum, rio, sunn, ulver];
    const names = ['Logos', 'Posters', 'Aluk Todolo', 'Conan', 'Darkspace', "Escarion", "Glazart", 'Goblin',
        "Hifi Store", "King Dude", "Metalorgie Fest", "Mysticum", "RIO", "Sunn O)))", "Ulver"];
    const indexes = [
        [], //logos
        [], //posters
        [1, 2], //aluk todolo
        [2, 3, 4, 5], //conan
        [], //darkspace
        [], //escarion
        [], //glazart
        [3, 4, 5, 6], //goblin
        [], //hifi
        [], //king dude
        [], //metalorgie
        [], //mysticum
        [], //rio
        [], //sunnO)))
        [] //ulver
    ];
    const videos = [
        null, null, null, null,
        978901818938041, // darkspace
        null, null,
        262610617954917, // goblin
        null,
        752027961625429, // king dude
        null, null, null, null,
        876609339167290 // ulver
    ];

    useEffect(() => {
        setId(props.match.params.id);
        setImages(imports[id]);
    }, [id, imports, props.match.params.id]);

    const mapper = (item, index) => {
        if (indexes[id].includes(index)) {
            return (
                <div key={index} className="portfolio-details-frame-med">
                    <img alt={index} src={item} className="portfolio-details-image"/>
                </div>
            )
        } else {
            return (
                <div key={index} className={id === '6' ? "portfolio-details-frame" : "portfolio-details-frame-big"}>
                    <img alt={index} src={item} className="portfolio-details-image"/>
                </div>
            )
        }
    };

    let img = images.map(mapper);
    const videoId = videos[id];
    const url = `https://www.facebook.com/emgalai/videos/${videoId}/`;

    if (id !== '1') {
        return(
            <div>
                <Nav/>
                <div className="portfolio-details">
                    <h1>{names[id].toUpperCase()}</h1>
                    <div className="portfolio-details-grid">
                        {img}
                        {
                            videos[id] == null ?
                                "" :
                                <ReactPlayer className="portfolio-details-video" url={url} controls/>
                        }
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <Nav/>
                <div className="portfolio-details">
                    <h1>{names[id].toUpperCase()}</h1>
                    <div className="portfolio-details-grid">
                        <BrowserView>
                            <Carousel autoPlay infiniteLoop interval={4000} showThumbs={false} className="portfolio-carousel">
                                {img}
                            </Carousel>
                        </BrowserView>
                        <MobileView>
                            <Carousel autoPlay infiniteLoop interval={4000} showThumbs={false} className="portfolio-carousel-mobile">
                                {img}
                            </Carousel>
                        </MobileView>
                    </div>
                </div>
            </div>
        )
    }
};

export default PortfolioDetails