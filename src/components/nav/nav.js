import React, {useState} from "react"
import {Link} from "react-router-dom";
import {useSpring, animated} from 'react-spring';
import {MobileView, BrowserView} from "react-device-detect"
import './nav.css'
import {history} from "../../helpers/history";
import logo1Black from "../../images/logo.svg";
import logo1White from "../../images/logo-whito.svg";
import logo2Black from "../../images/emgalaiprint SIMPLE logo.svg";
import logo2White from "../../images/emgalaiprint SIMPLE logoBLANC.png";


const Nav = props => {
    const [isWhite] = useState(history.location.pathname === '/portfolio' ||
        history.location.pathname === '/print' ||
        history.location.pathname === '/posters');
    const [isPoster] = useState(history.location.pathname === '/posters');
    const [isPrint] = useState(props.print);
    const [logo] = useState(isPrint ? isWhite ? logo2White : logo2Black : isWhite ? logo1White : logo1Black);
    const [dropShop, setDropShop] = useState(false);
    const [dropWork, setDropWork] = useState(false);

    const fade = useSpring({
        from: {opacity: 0,}, opacity: 1
    });

    const subFadeShop = useSpring({
        opacity: dropShop ? 1 : 0,
        marginTop: dropShop ? 0 : -10
    });

    const subFadeWork = useSpring({
        opacity: dropWork ? 1 : 0,
        marginTop: dropWork ? 0 : -10
    });

    const color = {
        color: isWhite ? 'white' : 'black'
    };

    const handleHoverShop = () => {
        setDropShop(true)
    };

    const handleLeaveShop = () => {
        setDropShop(false)
    };

    const handleToggleShop = () => {
        setDropShop(!dropShop)
    };

    const handleHoverWork = () => {
        setDropWork(true)
    };

    const handleLeaveWork = () => {
        setDropWork(false)
    };

    const handleToggleWork = () => {
        setDropWork(!dropWork)
    };

    if (!isPrint) {
        return(
            <div>
                <header style={isPoster ? {backgroundColor: 'black'} : {}} className="header">
                    <Link to="/" className="logo-link">
                        <img src={logo} className="logo" alt="logo" />
                    </Link>
                </header>
                <section style={isPoster ? {backgroundColor: 'black'} : {}} className="nav">
                    <animated.div className="nav-link-container" style={fade}>
                        <Link to="/about" style={color} className="nav-link">ABOUT</Link>
                    </animated.div>

                    <animated.div className="nav-link-container" style={fade}>
                        <Link to="/contact" className="nav-link" style={color}>CONTACT</Link>
                    </animated.div>
                    <BrowserView>
                        <animated.div className="nav-link-container" style={fade} onMouseLeave={handleLeaveWork}>
                            <Link to="/works" className="nav-link" style={color} onMouseEnter={handleHoverWork}>WORKS</Link>

                            <animated.div className="sub-links" style={subFadeWork}>
                                <Link to="/works" className="sub-link" style={color}>ALL</Link>
                                <Link to="/posters" className="sub-link" style={color}>POSTERS</Link>
                                <Link to="/logos" className="sub-link" style={color}>LOGOS</Link>
                            </animated.div>
                        </animated.div>
                    </BrowserView>
                    <MobileView>
                        <animated.div className="nav-link-container" style={fade} onClick={handleToggleWork}>
                            {dropWork ? "" : <div style={color} className="nav-link">WORKS</div>}
                            {
                                dropWork ?
                                    <animated.div className="sub-links" style={subFadeWork}>
                                        <Link to="/works" className="nav-link" style={color}>WORKS</Link>
                                        <Link to="/posters" className="sub-link" style={color}>POSTERS</Link>
                                        <Link to="/logos" className="sub-link" style={color}>LOGOS</Link>
                                    </animated.div>
                                    : ""
                            }
                        </animated.div>
                    </MobileView>
                    <BrowserView>
                        {/*<Link to="/shop" className="nav-link" style={color}>SHOP</Link>*/}
                        <animated.div className="nav-link-container" style={fade} onMouseLeave={handleLeaveShop}>
                            <div className="nav-link" style={color} onMouseEnter={handleHoverShop}>SHOP</div>
                                    <animated.div className="sub-links" style={subFadeShop}>
                                        <a target="_blank" rel="noopener noreferrer" href="https://emgalaishop.bigcartel.com/"
                                           className="sub-link" style={color}>BIGCARTEL</a>
                                        <a target="_blank" rel="noopener noreferrer" href="https://shop.e-kunst.com/artist/emgalai"
                                           className="sub-link" style={color}>E-KUNST</a>
                                    </animated.div>
                        </animated.div>
                    </BrowserView>
                    <MobileView>
                        <animated.div className="nav-link-container" style={fade} onClick={handleToggleShop}>
                            <div className="nav-link" style={color}>SHOP</div>
                            {
                                dropShop ?
                                    <animated.div className="sub-links" style={subFadeShop}>
                                        <a target="_blank" rel="noopener noreferrer" href="https://emgalaishop.bigcartel.com/"
                                           className="sub-link" style={color}>BIG CARTEL</a>
                                        <a target="_blank" rel="noopener noreferrer" href="https://shop.e-kunst.com/artist/emgalai"
                                           className="sub-link" style={color}>E-KUNST</a>
                                    </animated.div>
                                    : ""
                            }
                        </animated.div>
                    </MobileView>
                </section>
            </div>
        )
    } else {
        return (
            <div>
                <header className="header">
                    <Link to="/" className="logo-link">
                        <img src={logo} className="logo" alt="logo" />
                    </Link>
                </header>
                <section className="nav">
                    <animated.div className="nav-link-container" style={fade}>
                        <Link to="/devis" style={color} className="nav-link">DEVIS</Link>
                    </animated.div>

                    <animated.div className="nav-link-container" style={fade}>
                        <Link to="/prints" className="nav-link" style={color}>PRINTS</Link>
                    </animated.div>
                    <animated.div className="nav-link-container" style={fade}>
                        <Link to="/openings" className="nav-link" style={color}>OPENINGS</Link>
                    </animated.div>
                </section>
            </div>
        )
    }
};

export default Nav;