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


const Portfolio = () => {

    const fade1 = useSpring({
        from: {opacity: 0},opacity: 1,
        config: {duration: 500}
    });

    const fade2 = useSpring({
        from: {opacity: 0}, opacity: 1, delay: 500,
        config: {duration: 500}
    });

    return(
        <div>
            <Nav/>
            <div className="picto-container">
                <animated.div  style={fade1} className="row">
                    <Link to="/visual-identities" className="picto-link">
                        <div className="img">
                            <img src={visu} alt="visual identity"/>
                            <p>Visual</p>
                            <p>Identity</p>
                        </div>
                    </Link>
                    <Link to="/music" className="picto-link">
                        <div className="img">
                            <img src={zik} alt="music"/>
                            <p>Music</p>
                        </div>
                    </Link>
                    <Link to="/posters" className="picto-link">
                        <div className="img">
                            <img src={seri} alt="silkprint"/>
                            <p>Silkprinting</p>
                            <p>/ Posters</p>
                        </div>
                    </Link>
                </animated.div>
                <animated.div style={fade2} className="row">
                    <Link to="/editions" className="picto-link">
                        <div className="img">
                            <img src={edition} alt="editions"/>
                            <p>Editions</p>
                        </div>
                    </Link>
                    <Link to="/teasers" className="picto-link">
                        <div className="img">
                            <img src={montage} alt="editing"/>
                            <p>Video</p>
                            <p>Editing</p>
                        </div>
                    </Link>
                    <Link to="/logos" className="picto-link">
                        <div className="img">
                            <img src={logo} alt="logos"/>
                            <p>Logos</p>
                        </div>
                    </Link>
                </animated.div>
            </div>
            <Footer/>
        </div>
    )
};

export default Portfolio;