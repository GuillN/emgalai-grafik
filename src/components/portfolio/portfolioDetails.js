import React, {useEffect, useState} from 'react'
import conan from '../../helpers/images'


const PortfolioDetails = props => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        // const {name} = props.match.params;
        // console.log(name)
        console.log(props)
    });

    let img = conan.map((item, index) => (
        <div key={index}>
            <img alt={index} src={item}/>
        </div>
    ));

    return(
        <div className="portfolio-details">
            {img}
        </div>
    )
};

export default PortfolioDetails