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

    useEffect(() => {
        setId(props.match.params.id);
        setImages(imports[id]);
    }, [id, imports, props.match.params.id]);

    let img = images.map((item, index) => (
        <div key={index} className="portfolio-details-frame">
            <img alt={index} src={item} className="portfolio-details-image"/>
        </div>
    ));

    return(
        <div>
            <Nav/>
            <div className="portfolio-details">
                <h1>{names[id]}</h1>
                {img}
            </div>
        </div>
    )
};

export default PortfolioDetails