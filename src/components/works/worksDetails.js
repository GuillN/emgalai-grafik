import React from 'react'
import {clients} from "../../helpers/clients"
import {images} from '../../helpers/clients'
import ItemsDetails from "../items/itemsDetails"

const WorksDetails = props => {

    return (
        <ItemsDetails images={images} clients={clients} print={false} id={props.match.params.id}/>
    )
};

export default WorksDetails
