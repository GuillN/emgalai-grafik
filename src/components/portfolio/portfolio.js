import React from "react"
import "./portfolio.css"
import { Carousel } from "react-responsive-carousel"
import {MobileView, BrowserView} from "react-device-detect"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo from "../../images/logo-whito.svg";

import CarouselPane from "./carouselPane";
import Nav from "../nav/nav";
import Footer from "../footer/footer";
import {animated, useSpring} from "react-spring";
import {Link} from "react-router-dom";


const Portfolio = () =>  {

    const fade = useSpring({
        from: {opacity: 0,}, opacity: 1
    });

    return(
        <div>
            <BrowserView>
                <Nav print={false}/>
                <Carousel showThumbs={false} showStatus={false} stopOnHover={false} className="video-carousel"
                          autoPlay infiniteLoop interval={14000} dynamicHeight>
                    <div>
                        <CarouselPane videoId={752027961625429}/>
                    </div>
                    <div>
                        <CarouselPane videoId={978901818938041}/>
                    </div>
                    {/*<div>*/}
                    {/*    <CarouselPane videoId={876609339167290}/>*/}
                    {/*</div>*/}
                    <div>
                        <CarouselPane videoId={1072535196279459}/>
                    </div>
                    <div>
                        <CarouselPane videoId={262610617954917}/>
                    </div>
                </Carousel>
                <Footer/>
            </BrowserView>

            <MobileView>
                <div style={{backgroundColor: 'black', height: '100vh'}}>
                    <animated.header style={fade} className="header">
                        <Link to="/" className="logo-link">
                            <img src={logo} className="logo" alt="logo" />
                        </Link>
                    </animated.header>
                    <animated.div style={fade} className="home-link-container">

                        <Link to="/about" className="home-link">ABOUT</Link>
                        <Link to="/contact" className="home-link">CONTACT</Link>

                        <hr className="line"/>

                        <Link to="/portfolio" className="home-link">WORKS</Link>
                        <Link to="/portfolio/1" className="home-link">POSTERS</Link>
                        <Link to="/portfolio/0" className="home-link">LOGOS</Link>

                        <hr className="line"/>

                        <a target="_blank" rel="noopener noreferrer" href="https://emgalaishop.bigcartel.com/"
                           className="home-link">BIGCARTEL</a>
                        <a target="_blank" rel="noopener noreferrer" href="https://shop.e-kunst.com/artist/emgalai"
                           className="home-link">E-KUNST</a>
                    </animated.div>
                    <Footer/>
                </div>
            </MobileView>
        </div>
    )

};

export default Portfolio;