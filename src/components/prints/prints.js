import React from "react"
import {Link} from "react-router-dom";

import tshirts from "../../images/tshirts/Emgalai_s-Gatezoom1.jpg";
import vinyls from "../../images/vinyls/carré-en-fait-.jpg"
import cassettes from "../../images/cassettes/70229637_911070585930378_6026411403500322816_n.jpg"

import './prints.css'
import Nav from "../nav/nav";
import WorksItem from "../works/worksItem";

const Prints = () => {

    return (
        <div>
            <Nav print/>
            <div className="prints-container">
                <Link to="/prints/0">
                    <WorksItem img={tshirts} alt={'tshirts_img'} text={'T-Shirts'}/>
                </Link>
                <Link to="/prints/1">
                    <WorksItem img={vinyls} alt={'vinyls_img'} text={'Vinyls'}/>
                </Link>
                <Link to="/prints/2">
                    <WorksItem img={cassettes} alt={'cassette_img'} text={'Cassettes'}/>
                </Link>
            </div>
        </div>
    )
};

export default Prints