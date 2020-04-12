import React from "react"
import "./works.css"
import {Link} from "react-router-dom";
import {useSpring, animated} from "react-spring";
import Nav from "../nav/nav";
import Items from "../items/items";

import aluk from '../../images/aluk_todolo/carré-site.jpg'
import conan from '../../images/conan/3.jpg'
import cult from '../../images/cult_of_fire/3.jpg'
import darkspace from '../../images/darkspace/ZOOM3.jpg'
import doom from '../../images/doom/61171990_1260684680759752_8179678087525433344_o.jpg'
import escarion from '../../images/escarion/Escarion-Envy.jpg'
import glazart from '../../images/glazart/glaz-carré.jpg'
import goblin from '../../images/goblin/6.jpg'
import godflesh from '../../images/godflesh/1.jpg'
import hifi from '../../images/hifi/hifi-store-totebag-old.jpg'
import king from '../../images/king_dude/2.jpg'
import metalorgie from '../../images/metalorgie/carré.jpg'
import mysticum from '../../images/mysticum/3.jpg'
import rio from '../../images/rio/3.jpg'
import sunn from '../../images/sunn/1 (1).jpg'
import ulver from '../../images/ulver/zoom-3.jpg'

const Works = () => {

    const fade = useSpring({
        from: {opacity: 0},opacity: 1,
        config: {duration: 500}
    });

    return(
        <div>
            <Nav/>
            <animated.div style={fade} className="works-container">
                <Link to="/works/0">
                    <Items img={aluk} alt={'aluk_todolo_img'} text={'Aluk Todolo'}/>
                </Link>
                <Link to="/works/1">
                    <Items img={conan} alt={'conan_img'} text={'Conan'}/>
                </Link>
                <Link to="/works/2">
                    <Items img={cult} alt={'cult_img'} text={'Cult Of Fire'}/>
                </Link>
                <Link to="/works/3">
                    <Items img={darkspace} alt={'darkspace_img'} text={'Darkspace'}/>
                </Link>
                <Link to="/works/4">
                    <Items img={doom} alt={'doom_img'} text={'Doom'}/>
                </Link>
                <Link to="/works/5">
                    <Items img={escarion} alt={'escarion_img'} text={'Escarion'}/>
                </Link>
                <Link to="/works/6">
                    <Items img={glazart} alt={'glazart_img'} text={'Glazart'}/>
                </Link>
                <Link to="/works/7">
                    <Items img={goblin} alt={'goblin_img'} text={'Goblin'}/>
                </Link>
                <Link to="/works/8">
                    <Items img={godflesh} alt={'godflesh_img'} text={'Godflesh'}/>
                </Link>
                <Link to="/works/9">
                    <Items img={hifi} alt={'hifi_store_img'} text={'Hifi Store'}/>
                </Link>
                <Link to="/works/10">
                    <Items img={king} alt={'king_dude_img'} text={'King Dude'}/>
                </Link>
                <Link to="/works/11">
                    <Items img={metalorgie} alt={'metalorgie_fest_img'} text={'Metalorgie Fest'}/>
                </Link>
                <Link to="/works/12">
                    <Items img={mysticum} alt={'mysticum_img'} text={'Mysticum'}/>
                </Link>
                <Link to="/works/13">
                    <Items img={rio} alt={'rio_img'} text={'RIO'}/>
                </Link>
                <Link to="/works/14">
                    <Items img={sunn} alt={'sunnO)))_img'} text={'Sunn O)))'}/>
                </Link>
                <Link to="/works/15">
                    <Items img={ulver} alt={'ulver_img'} text={'Ulver'}/>
                </Link>
            </animated.div>
        </div>
    )
};

export default Works;