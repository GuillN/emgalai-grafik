import React from "react"
import "./portfolio.css"
import {Link} from "react-router-dom";
import {useSpring, animated} from "react-spring";
import Nav from "../nav/nav";
import PortfolioItem from "./portfolioItem";

import aluk from '../../images/aluk_todolo/carré-site.jpg'
import conan from '../../images/conan/3.jpg'
import cult from '../../images/cult_of_fire/3.jpg'
import darkspace from '../../images/darkspace/ZOOM3.jpg'
import doom from '../../images/doom/61171990_1260684680759752_8179678087525433344_o.jpg'
import escarion from '../../images/escarion/Escarion-Envy.jpg'
import glazart from '../../images/glazart/glaz-carré.jpg'
import goblin from '../../images/goblin/6.jpg'
import godflesh from '../../images/godflesh/1.jpg'
import hifi from '../../images/hifi/hifi-store-totebag-old.jpg'
import king from '../../images/king_dude/2.jpg'
import metalorgie from '../../images/metalorgie/carré.jpg'
import mysticum from '../../images/mysticum/3.jpg'
import rio from '../../images/rio/3.jpg'
import sunn from '../../images/sunn/1 (1).jpg'
import ulver from '../../images/ulver/zoom-1.jpg'

const Portfolio = () => {

    const fade = useSpring({
        from: {opacity: 0},opacity: 1,
        config: {duration: 500}
    });

    return(
        <div>
            <Nav/>
            <animated.div style={fade} className="picto-container">
                <Link to="/portfolio/2">
                    <PortfolioItem img={aluk} alt={'aluk_todolo_img'} text={'Aluk Todolo'}/>
                </Link>
                <Link to="/portfolio/3">
                    <PortfolioItem img={conan} alt={'conan_img'} text={'Conan'}/>
                </Link>
                <Link to="/portfolio/4">
                    <PortfolioItem img={cult} alt={'cult_img'} text={'Cult Of Fire'}/>
                </Link>
                <Link to="/portfolio/5">
                    <PortfolioItem img={darkspace} alt={'darkspace_img'} text={'Darkspace'}/>
                </Link>
                <Link to="/portfolio/6">
                    <PortfolioItem img={doom} alt={'doom_img'} text={'Doom'}/>
                </Link>
                <Link to="/portfolio/7">
                    <PortfolioItem img={escarion} alt={'escarion_img'} text={'Escarion'}/>
                </Link>
                <Link to="/portfolio/8">
                    <PortfolioItem img={glazart} alt={'glazart_img'} text={'Glazart'}/>
                </Link>
                <Link to="/portfolio/9">
                    <PortfolioItem img={goblin} alt={'goblin_img'} text={'Goblin'}/>
                </Link>
                <Link to="/portfolio/10">
                    <PortfolioItem img={godflesh} alt={'godflesh_img'} text={'Godflesh'}/>
                </Link>
                <Link to="/portfolio/11">
                    <PortfolioItem img={hifi} alt={'hifi_store_img'} text={'Hifi Store'}/>
                </Link>
                <Link to="/portfolio/12">
                    <PortfolioItem img={king} alt={'king_dude_img'} text={'King Dude'}/>
                </Link>
                <Link to="/portfolio/13">
                    <PortfolioItem img={metalorgie} alt={'metalorgie_fest_img'} text={'Metalorgie Fest'}/>
                </Link>
                <Link to="/portfolio/14">
                    <PortfolioItem img={mysticum} alt={'mysticum_img'} text={'Mysticum'}/>
                </Link>
                <Link to="/portfolio/15">
                    <PortfolioItem img={rio} alt={'rio_img'} text={'RIO'}/>
                </Link>
                <Link to="/portfolio/16">
                    <PortfolioItem img={sunn} alt={'sunnO)))_img'} text={'Sunn O)))'}/>
                </Link>
                <Link to="/portfolio/17">
                    <PortfolioItem img={ulver} alt={'ulver_img'} text={'Ulver'}/>
                </Link>
            </animated.div>
        </div>
    )
};

export default Portfolio;