import React from 'react'
import {workArray} from "../../helpers/imageArrays"
import ItemsDetails from "../items/itemsDetails"

// Displays popup images of the works category
const WorksDetails = props => {
    return <ItemsDetails array={workArray} id={props.match.params.id} print={false}/>
}

export default WorksDetails
