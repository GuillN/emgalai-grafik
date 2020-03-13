import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom";
import {useSpring, animated} from 'react-spring';
import './nav.css'
import {history} from "../../helpers/history";
import logo1Black from "../../images/logo.svg";
import logo1White from "../../images/logo-whito.svg";
import logo2Black from "../../images/emgalaiprint SIMPLE logo.svg";
import logo2White from "../../images/emgalaiprint SIMPLE logoBLANC.png";


const Nav = props => {
    const [isWhite] = useState(history.location.pathname === '/emgalai' || history.location.pathname === '/print');
    const [isPrint] = useState(props.print);
    const [logo] = useState(isPrint ? isWhite ? logo2White : logo2Black : isWhite ? logo1White : logo1Black);
    const [dropShop, setDropShop] = useState(false);
    const [dropWork, setDropWork] = useState(false);

    const fade = useSpring({
        from: {opacity: 0,}, opacity: 1
    });

    const subFadeShop = useSpring({
        opacity: dropShop ? 1 : 0
    });

    const subFadeWork = useSpring({
        opacity: dropWork ? 1 : 0
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

    const handleHoverWork = () => {
        setDropWork(true)
    };

    const handleLeaveWork = () => {
        setDropWork(false)
    };

    if (!isPrint) {
        return(
            <div>
                <header className="header">
                    <Link to="/" className="logo-link">
                        <img src={logo} className="logo" alt="logo" />
                    </Link>
                </header>
                <section className="nav">
                    <animated.div style={fade}>
                        <Link to="/about" style={color} className="nav-link">ABOUT</Link>
                    </animated.div>

                    <animated.div style={fade}>
                        <Link to="/contact" className="nav-link" style={color}>CONTACT</Link>
                    </animated.div>
                    <animated.div style={fade} onMouseEnter={handleHoverWork} onMouseLeave={handleLeaveWork}>
                        <Link to="/portfolio" className="nav-link" style={color}>WORKS</Link>
                        {
                            dropWork ?
                                <animated.div className="sub-links" style={subFadeWork}>
                                    <Link to="/portfolio/1" className="nav-link sub-link" style={color}>POSTERS</Link>
                                    <Link to="/portfolio/0" className="nav-link sub-link" style={color}>LOGOS</Link>
                                </animated.div>
                                : ""
                        }
                    </animated.div>
                    <animated.div style={fade} onMouseEnter={handleHoverShop} onMouseLeave={handleLeaveShop}>
                        {/*<Link to="/shop" className="nav-link" style={color}>SHOP</Link>*/}
                        <a className="nav-link" style={color}>SHOP</a>
                        {
                            dropShop ?
                                <animated.div className="sub-links" style={subFadeShop}>
                                    <a target="_blank" rel="noopener noreferrer" href="https://emgalaishop.bigcartel.com/"
                                       className="nav-link sub-link" style={color}>BIG CARTEL</a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://shop.e-kunst.com/artist/emgalai"
                                       className="nav-link sub-link" style={color}>E-KUNST</a>
                                </animated.div>
                                : ""
                        }
                    </animated.div>
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
                    <animated.div style={fade}>
                        <Link to="/devis" style={color} className="nav-link">DEVIS</Link>
                    </animated.div>

                    <animated.div style={fade}>
                        <Link to="/prints" className="nav-link" style={color}>PRINTS</Link>
                    </animated.div>
                    <animated.div style={fade}>
                        <Link to="/openings" className="nav-link" style={color}>OPENINGS</Link>
                    </animated.div>
                </section>
            </div>
        )
    }
};

export default Nav;