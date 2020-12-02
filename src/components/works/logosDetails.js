import React from 'react'
import ItemsDetails from "../items/itemsDetails";
import {logoArray} from "../../helpers/imageArrays";

// Displays popup images of the logos category
const LogosDetails = () => {
    return <ItemsDetails array={logoArray} id={0} print={false}/>
}

export default LogosDetails
