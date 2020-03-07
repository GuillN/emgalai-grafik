import React, {useState, useEffect} from "react"
import DelayLink from 'react-delay-link';
import {animated, useSpring} from "react-spring";
import {Spring} from "react-spring/renderprops-universal";



const Logo = props => {
    const [isToggled, setIsToggled] = useState(false);
    const [offset, setOffset] = useState(0);
    const path = React.createRef();

    // useEffect(() => {
    //     // const draw = document.getElementById("draw");
    //     // const length = draw.getTotalLength();
    //     // draw.style.strokeDasharray = length
    //     setOffset(path.current.getTotalLength())
    // });

    // const fade = useSpring({
    //     from: {
    //         opacity: 0,
    //         marginTop: -500
    //     },
    //     opacity: 1,
    //     marginTop: 0
    // });

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
                <animated.div>
                    <animated.div style={move} onClick={() => setIsToggled(!isToggled)}>
                        <Spring
                            from={{x:0}}
                            to={{x:100}}>
                            { atr => (
                                <svg strokeDashoffset={atr.x} viewBox="0 0 595.28 841.89">
                                    <path id="draw" d="M236.923 184.767c.712.717 3.393 4.65 8.041 11.797 5.896-9.829 12.419-16.89 19.571-21.178-8.225-3.928-14.39-10.458-18.5-19.569-4.469 7.329-11.439 14.118-20.909 20.369 5.002 2.327 8.936 5.19 11.797 8.581zM299.921 164.689c.71.718 3.39 4.65 8.041 11.797 5.895-9.828 12.414-16.891 19.57-21.18-8.226-3.929-14.392-10.455-18.502-19.569-4.466 7.331-11.436 14.119-20.905 20.374 5.001 2.324 8.934 5.186 11.796 8.578zM306.58 356.185l-.027-.004-34.199-25.418-.404-14.615c30.073-22.285 70.546-50.474 89.67-63.395-15.279-27.075-27.212-49.058-35.79-65.946-34.582 20.371-80.156 42.892-104.544 46.109 4.285.801 8.306 3.081 12.061 6.836 3.754 3.753 5.631 7.64 5.631 11.66l.403 71.708c0 8.042-5.367 14.881-16.088 20.511l59.346 36.158c23.536 13.785 45.038 57.874 24.14 109.136-26.552 65.133 8.246 105.175 8.246 105.175s-23.455-41.072-.687-87.992c0-.003 47.281-101.701-7.758-149.923zm-33.825-131.314l25.708-13.648 27.75 52.142-53.458 39.671v-78.165z" />
                                    <g>
                                        <path d="M299.029 789.47L77.004 187.041 299.016 50.57l219.326 135.901-.92 2.536L299.029 789.47zM85.115 189.848l213.874 580.311L510.26 189.272l-211.257-130.9L85.115 189.848z" />
                                        <path d="M298.873 748.401L95.096 193.892 298.829 68.766l201.393 124.637-201.349 554.998zM122.118 203.266L298.74 683.879l174.547-481.122L298.784 94.763 122.118 203.266z" />
                                    </g>
                                </svg>
                            )}
                        </Spring>
                    </animated.div>
                </animated.div>
            </DelayLink>
        </div>
    );
};

export default Logo;