import React from "react"
import "./portfolio.css"
import {Link} from "react-router-dom";
import {useSpring, animated} from "react-spring";

import visu from '../../images/picto-visu.jpg'
import zik from '../../images/picto-zik.jpg'
import seri from '../../images/picto-seri.jpg'
import edition from '../../images/picto-edition.jpg'
import montage from '../../images/picto-montage.jpg'
import logo from '../../images/picto-logo.jpg'
import Nav from "../nav/nav";
import Footer from "../footer/footer";
import PortfolioItem from "./portfolioItem";

import goblin from '../../images/goblin/carré-goblin.jpg'
import conan from '../../images/conan/zoom1.jpg'
import darkspace from '../../images/darkspace/ZOOM1.jpg'
import ulver from '../../images/ulver/zoom-1.jpg'
import sunn from '../../images/sunn/1 (1).jpg'
import PortfolioDetails from "./portfolioDetails";



const Portfolio = () => {

    const fade = useSpring({
        from: {opacity: 0},opacity: 1,
        config: {duration: 500}
    });

    return(
        <div>
            <Nav/>
            <animated.div style={fade} className="picto-container">
                <Link to="/portfolio/0">
                    <PortfolioItem img={conan} alt={'conan_img'} text={'Conan'}/>
                </Link>
                <Link to="/portfolio/1">
                    <PortfolioItem img={goblin} alt={'goblin_img'} text={'Goblin'}/>
                </Link>
                <PortfolioItem img={darkspace} alt={'darkspace_img'} text={'Darkspace'}/>
                <PortfolioItem img={ulver} alt={'ulver_img'} text={'Ulver'}/>
                <PortfolioItem img={sunn} alt={'sunn_img'} text={'Sunn O)))'}/>
            </animated.div>
        </div>
    )
};

export default Portfolio;