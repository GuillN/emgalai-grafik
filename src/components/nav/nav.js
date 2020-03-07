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

    // useEffect(() => {
    //     console.log(`Nav says ${isPrint ? 'print section' : 'main section'}`)
    // });

    const fade = useSpring({
        from: {opacity: 0,}, opacity: 1
    });

    const color = {
        color: isWhite ? 'white' : 'black'
    };

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
                <animated.div style={fade}>
                    <Link to="/portfolio" className="nav-link" style={color}>PORTFOLIO</Link>
                </animated.div>
                <animated.div style={fade}>
                    {/*<Link to="/shop" className="nav-link" style={color}>SHOP</Link>*/}
                    <a target="_blank" rel="noopener noreferrer" href="https://emgalaishop.bigcartel.com/"
                       className="nav-link" style={color}>SHOP</a>
                </animated.div>
            </section>
        </div>
    )
};

export default Nav;