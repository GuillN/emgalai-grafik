import React, {useEffect, useState} from 'react'
import {tshirts} from '../../helpers/images'
import Nav from "../nav/nav";

const PrintsDetails = props => {

    const [id, setId] = useState(0);
    const [images, setImages] = useState([]);
    const imports = [tshirts];
    const names = ['T-Shirts'];
    const indexes = [
        [] //tshirts
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