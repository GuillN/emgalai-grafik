import React, {useEffect, useState} from 'react'
import {logos, tshirts, posters, aluk, conan, darkspace, escarion, glazart, goblin, hifi, king, metalorgie, mysticum,
    rio, sunn, ulver} from '../../helpers/images'
import Nav from "../nav/nav";

const PortfolioDetails = props => {

    const [id, setId] = useState(0);
    const [images, setImages] = useState([]);
    const imports = [logos, tshirts, posters, aluk, conan, darkspace, escarion, glazart, goblin, hifi, king, metalorgie,
        mysticum, rio, sunn, ulver];
    const names = ['Logos', 'T-Shirts', 'Posters', 'Aluk Todolo', 'Conan', 'Darkspace', "Escarion", "Glazart", 'Goblin',
        "Hifi Store", "King Dude", "Metalorgie Fest", "Mysticum", "RIO", "Sunn O)))", "Ulver"];
    const indexes = [
        [], //logos
        [], //tshirts
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
                <div key={index} className={id === '2' || id === '7' ? "portfolio-details-frame" : "portfolio-details-frame-big"}>
                    <img alt={index} src={item} className="portfolio-details-image"/>
                </div>
            )
        }
    };

    let img = images.map(mapper);

    return(
        <div>
            <Nav/>
            <div className="portfolio-details">
                <h1>{names[id]}</h1>
                <div className="portfolio-details-grid">
                    {img}
                </div>
            </div>
        </div>
    )
};

export default PortfolioDetails