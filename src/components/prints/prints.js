import React from "react"
import {Link} from "react-router-dom";
import tshirts from "../../images/tshirts/Emgalai_s-Gatezoom1.jpg";
import './prints.css'
import Nav from "../nav/nav";
import PortfolioItem from "../portfolio/portfolioItem";

const Prints = () => {

    return (
        <div>
            <Nav print/>
            <div className="prints-container">
                <Link to="/prints/0">
                    <PortfolioItem img={tshirts} alt={'tshirts_img'} text={'T-Shirts'}/>
                </Link>
            </div>
        </div>
    )
};

export default Prints