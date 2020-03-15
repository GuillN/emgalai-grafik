import React from "react"
import Nav from "../nav/nav";
import Footer from "../footer/footer";
import logo from "../../images/emgalaiprint SIMPLE logoBLANC.png";
import {animated, useSpring} from "react-spring";
import {Link} from "react-router-dom";
import {BrowserView, MobileView} from "react-device-detect";

const Print = () => {

    const fade = useSpring({
        from: {opacity: 0,}, opacity: 1
    });

    return(
        <div>
            <BrowserView>
                <div style={{backgroundColor: 'black', height: '100vh'}}>
                    <Nav print={true}/>

                    <Footer/>
                </div>
            </BrowserView>
            <MobileView>
                <div style={{backgroundColor: 'black', height: '100vh'}}>
                    <animated.header style={fade} className="header">
                        <Link to="/" className="logo-link">
                            <img src={logo} className="logo" alt="logo" />
                        </Link>
                    </animated.header>
                    <animated.div style={fade} className="home-link-container">

                        <Link to="/devis" className="home-link">DEVIS</Link>
                        <Link to="/prints" className="home-link">PRINTS</Link>
                        <Link to="/openings" className="home-link">OPENINGS</Link>



                    </animated.div>
                    <Footer/>
                </div>
            </MobileView>
        </div>
)
};

export default Print;