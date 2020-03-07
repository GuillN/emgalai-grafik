import React, {useEffect, useState} from 'react'
import {conan, goblin} from '../../helpers/images'

const PortfolioDetails = props => {

    const [images, setImages] = useState([]);
    const [id, setId] = useState(0);
    const imports = [conan, goblin];
    const names = ['Conan', 'Goblin'];
    
    useEffect(() => {
        setImages(imports[props.match.params.id])
    }, [imports, props.match.params.id]);

    let img = images.map((item, index) => (
        <div key={index}>
            <img alt={index} src={item}/>
        </div>
    ));

    return(
        <div className="portfolio-details">
            <h1>{names[props]}</h1>
            {img}
        </div>
    )
};

export default PortfolioDetails