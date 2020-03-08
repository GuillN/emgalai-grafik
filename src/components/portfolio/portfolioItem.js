import React from 'react'

const PortfolioItem = props => {
    return(
        <div className="portfolio-item">
            <img src={props.img} alt={props.alt}/>
            <p className="portfolio-item-text">{props.text}</p>
        </div>
    )
};

export default PortfolioItem