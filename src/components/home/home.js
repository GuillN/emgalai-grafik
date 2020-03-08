import React, {useState} from 'react'
import './home.css'
import logo1 from '../../images/logo-whito.svg'
import logo2 from '../../images/emgalaiprint SIMPLE BLANClogo.svg'
import barre from '../../images/barre centrale(1).png'
import {useSpring, animated} from 'react-spring'
import AnimatedLogo from "./animatedLogo/animatedLogo";

const Home = () => {
    const [isToggledLeft, setToggleLeft] = useState(false);
    const [isToggledRight, setToggleRight] = useState(false);

    const disappearLeft = useSpring({
        display: isToggledRight ? 'none' : 'inline'
    });

    const disappearRight = useSpring({
        display: isToggledLeft ? 'none' : 'inline'
    });

    return (
        <animated.div className="home-container">
            <animated.div onClick={() => setToggleLeft(!isToggledLeft)} style={disappearLeft} className="home-logo-container">
                <AnimatedLogo className="animated-logo" logo={logo1} to={"/emgalai"} width={'15vw'} toWidth={'5vw'} margin={'0.5vh'}/>
                <animated.p className="home-text" style={disappearRight}>
                    portfolio
                </animated.p>
            </animated.div>
            <animated.div style={disappearLeft}>
                <animated.div style={disappearRight}>
                    <img src={barre} alt="separation" className="barre" />
                </animated.div>
            </animated.div>
            <animated.div onClick={() => setToggleRight(!isToggledRight)} style={disappearRight} className="home-logo-container">
                <AnimatedLogo logo={logo2} to={"/print"} width={'17vw'} toWidth={'6vw'} margin={'-1.1vh'}/>
                <animated.p className="home-text" style={disappearLeft}>
                    workshop
                </animated.p>
            </animated.div>
        </animated.div>
    )
};

export default Home;