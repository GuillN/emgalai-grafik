import React from 'react'
import Nav from "../nav/nav";
import {Link} from "react-router-dom";

import Items from "../items/items";
import rib from "../../images/tshirts/rib/67567580_1310293545798865_9137664366735261696_o.jpg";
import dark from "../../images/tshirts/darkspace/dark_tish_carré.jpg";
import gate from "../../images/tshirts/gate/Emgalai_s-Gatezoom1.jpg";

const Tshirts = () => {
    return (
        <div>
            <Nav print/>
            <div className="works-container">
                <Link to="/tshirts/0">
                    <Items img={rib} alt={'tshirts_img'} text={'Rock In Bourlon'}/>
                </Link>
                <Link to="/tshirts/1">
                    <Items img={dark} alt={'vinyls_img'} text={'Darkspace'}/>
                </Link>
                <Link to="/tshirts/2">
                    <Items img={gate} alt={'cassette_img'} text={"Ëmgalaï's Gate"}/>
                </Link>
            </div>
        </div>
    )
};

export default Tshirts