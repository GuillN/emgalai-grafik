import React, {useState} from 'react'
import {animated, useSpring} from "react-spring";
import DelayLink from 'react-delay-link';

const AnimatedLogo = props => {

    const [isToggled, setIsToggled] = useState(false);

    const fade = useSpring({
        from: {
            opacity: 0,
            marginTop: -500
        },
        opacity: 1,
        marginTop: 0
    });

    const move = useSpring({
        width: isToggled ? '5vw' : '20vw',
        marginLeft: isToggled ? '50vw' : '0vw',
        marginRight: isToggled ? '50vw' : '0vw',
        marginTop: isToggled ? '0.5vh' : '20vh',
        filter: isToggled ? 'invert(100%)' : 'invert(0%)'
    });

    return (
        <div>
            <DelayLink to={props.to} delay={700}>
                <animated.div style={fade}>
                    <animated.img style={move} className="big-logo" src={props.logo} alt="emgalai_logo"
                                  onClick={() => setIsToggled(!isToggled)}/>
                </animated.div>
            </DelayLink>
        </div>
    )
};

export default AnimatedLogo