import React from 'react'
import ItemsDetails from "../items/itemsDetails";
import {tshirtArray} from "../../helpers/imageArrays";

// Displays popup images of the tshirts category
const TshirtsDetails = props => {
    return <ItemsDetails array={tshirtArray} id={props.match.params.id} print/>
}

export default TshirtsDetails
