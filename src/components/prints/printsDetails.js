import React from 'react'
import ItemsDetails from "../items/itemsDetails";
import {printArray} from "../../helpers/imageArrays";

// Displays popup images of the prints category
const PrintsDetails = props => {
    return <ItemsDetails array={printArray} id={props.match.params.id} print/>
}

export default PrintsDetails
