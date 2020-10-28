import React from "react"
import {Link} from "react-router-dom";
import {clients} from "../../helpers/clients"
import "./works.css"
import Nav from "../nav/nav";
import Items from "../items/items";

const Works = () => {

    const works = Object.keys(clients).map((clientKey, index) => {
        const client = clients[clientKey]
        return (
            <Link to={`/works/${index}`}>
                <Items cover={client.cover} alt={`${client.title}_img`} title={client.title}/>
            </Link>
        )
    })

    return (
        <div>
            <Nav/>
            <div className="works-container">
                {works}
            </div>
        </div>
    )
};

export default Works;
