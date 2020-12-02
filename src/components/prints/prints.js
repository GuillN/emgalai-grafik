import React from "react"
import {Link} from "react-router-dom";

import tshirts from "../../images/tshirts/gate/Emgalai_s-Gatezoom1.jpg";
import vinyls from "../../images/vinyls/carré-en-fait-.jpg"
import cassettes from "../../images/cassettes/70229637_911070585930378_6026411403500322816_n.jpg"

import Nav from "../nav/nav";
import Items from "../items/items";

// Displays previews of the prints category
const Prints = () => {
    return <div>
        <Nav print/>
        <div className="works-container">
            <Link to="/tshirts">
                <Items cover={tshirts} alt={'tshirts_img'} title={'T-Shirts'}/>
            </Link>
            <Link to="/prints/0">
                <Items cover={vinyls} alt={'vinyls_img'} title={'Vinyls'}/>
            </Link>
            <Link to="/prints/1">
                <Items cover={cassettes} alt={'cassette_img'} title={'Cassettes'}/>
            </Link>
        </div>
    </div>
}

export default Prints
