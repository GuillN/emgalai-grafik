import React, {useEffect, useState} from 'react'
import { Carousel } from "react-responsive-carousel"
import {MobileView, BrowserView} from "react-device-detect"
import {logos, posters, aluk, conan, cult, darkspace, doom, escarion, glazart, goblin, godflesh, hifi, king, metalorgie, mysticum,
    rio, sunn, ulver} from '../../helpers/images'
import Nav from "../nav/nav";
import ReactPlayer from "react-player";

const PortfolioDetails = props => {

    const [id, setId] = useState(0);
    const [images, setImages] = useState([]);
    const imports = [logos, posters, aluk, conan, cult, darkspace, doom, escarion, glazart, goblin, godflesh, hifi, king, metalorgie,
        mysticum, rio, sunn, ulver];
    const names = ['Logos', 'Posters', 'Aluk Todolo', 'Conan', 'Cult Of Fire', 'Darkspace', "Doom", "Escarion", "Glazart", 'Goblin',
        'Godflesh', "Hifi Store", "King Dude", "Metalorgie Fest", "Mysticum", "RIO", "Sunn O)))", "Ulver"];
    const indexes = [
        [], //logos
        [], //posters
        [1, 2], //aluk todolo
        [2, 3, 4, 5], //conan
        [1, 2, 3, 4], //cult
        [1, 2, 3, 4], //darkspace
        [1, 2], //doom
        [], //escarion
        [], //glazart
        [3, 4, 5, 6], //goblin
        [1, 2], //godflesh
        [], //hifi
        [], //king dude
        [0, 1], //metalorgie
        [0, 1], //mysticum
        [], //rio
        [], //sunnO)))
        [] //ulver
    ];
    const videos = [
        null, null, null, null, null,
        978901818938041, // darkspace
        1072535196279459, //doom
        null, null,
        262610617954917, // goblin
        null, null,
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
                <div key={index} className={id === '8' ? "portfolio-details-frame" : "portfolio-details-frame-big"}>
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