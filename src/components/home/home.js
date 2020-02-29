import React, {useState} from 'react'
import './home.css'
import logo1 from '../../images/logo.svg'
import logo2 from '../../images/emgalaiprint SIMPLE logo.png'
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

    const backColor = useSpring({
        backgroundColor: isToggledLeft || isToggledRight ? 'black' : 'white'
    });

    return (
        <animated.div className="home-container" style={backColor}>
            <animated.div onClick={() => setToggleLeft(!isToggledLeft)} style={disappearLeft} className="home-logo-container">
                <AnimatedLogo logo={logo1} to={"/emgalai"}/>
            </animated.div>
            <animated.div onClick={() => setToggleRight(!isToggledRight)} style={disappearRight} className="home-logo-container">
                <AnimatedLogo logo={logo2} to={"/print"}/>
            </animated.div>
        </animated.div>
    )
};

export default Home;