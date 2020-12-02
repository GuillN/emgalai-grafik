import React from 'react'
import Nav from "../nav/nav";
import {Link} from "react-router-dom";

import Items from "../items/items";
import {tshirtArray} from "../../helpers/imageArrays";

// Displays previews of the tshirts category
const Tshirts = () => {

    const tshirts = Object.keys(tshirtArray).map((clientKey, index) => {
        const client = tshirtArray[clientKey]
        return <Link to={`/tshirts/${index}`}>
            <Items cover={client.cover} alt={`${client.title}_img`} title={client.title}/>
        </Link>
    })

    return <div>
        <Nav print/>
        <div className="works-container">
            {tshirts}
        </div>
    </div>
}

export default Tshirts
