import React from "react"
import {Link} from "react-router-dom";
import {workArray} from "../../helpers/imageArrays"
import "./works.css"
import Nav from "../nav/nav";
import Items from "../items/items";

// Displays previews of the works category
const Works = () => {

    const works = Object.keys(workArray).map((clientKey, index) => {
        const client = workArray[clientKey]
        return <Link to={`/works/${index}`}>
            <Items cover={client.cover} alt={`${client.title}_img`} title={client.title}/>
        </Link>
    })

    return <div>
        <Nav/>
        <div className="works-container">
            {works}
        </div>
    </div>
}

export default Works;
