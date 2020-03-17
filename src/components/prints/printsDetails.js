import React, {useEffect, useState} from 'react'
import {tshirts, vinyls, cassettes} from '../../helpers/images'
import Nav from "../nav/nav";

const PrintsDetails = props => {

    const [id, setId] = useState(0);
    const [images, setImages] = useState([]);
    const imports = [tshirts, vinyls, cassettes];
    const names = ['T-Shirts', 'Vinyls', 'Cassettes'];
    const indexes = [
        [1, 2], //tshirts
        [0, 1], //vinyls
        [0, 1] //cassettes
    ];
    const smallIndexes = [
        [3, 4, 5],
        [],
        [2, 3, 4]
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
        } else if (smallIndexes[id].includes(index)) {
            return (
                <div key={index} className="portfolio-details-frame-small">
                    <img alt={index} src={item} className="portfolio-details-image"/>
                </div>
            )
        } else {
            return (
                <div key={index} className="portfolio-details-frame-big">
                    <img alt={index} src={item} className="portfolio-details-image"/>
                </div>
            )
        }
    };

    let img = images.map(mapper);

    return(
        <div>
            <Nav print/>
            <div className="portfolio-details">
                <h1>{names[id].toUpperCase()}</h1>
                <div className="portfolio-details-grid">
                    {img}
                </div>
            </div>
        </div>
    )
};

export default PrintsDetails