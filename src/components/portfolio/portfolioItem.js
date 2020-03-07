import React from 'react'
import {Link} from "react-router-dom";
import PortfolioDetails from "./portfolioDetails";

const PortfolioItem = props => {
    return(
        // <div>
        //     <Link to={'/emgalai'}>
                <div className="portfolio-item">
                    <img src={props.img} alt={props.alt}/>
                    <p>{props.text}</p>
                </div>
        //     </Link>
        // </div>
    )
};

export default PortfolioItem