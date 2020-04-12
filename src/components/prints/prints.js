import React from "react"
import {Link} from "react-router-dom";

import tshirts from "../../images/tshirts/gate/Emgalai_s-Gatezoom1.jpg";
import vinyls from "../../images/vinyls/carré-en-fait-.jpg"
import cassettes from "../../images/cassettes/70229637_911070585930378_6026411403500322816_n.jpg"

// import './prints.css'
import Nav from "../nav/nav";
import Items from "../items/items";

const Prints = () => {

    return (
        <div>
            <Nav print/>
            <div className="works-container">
                <Link to="/tshirts">
                    <Items img={tshirts} alt={'tshirts_img'} text={'T-Shirts'}/>
                </Link>
                <Link to="/prints/0">
                    <Items img={vinyls} alt={'vinyls_img'} text={'Vinyls'}/>
                </Link>
                <Link to="/prints/1">
                    <Items img={cassettes} alt={'cassette_img'} text={'Cassettes'}/>
                </Link>
            </div>
        </div>
    )
};

export default Prints