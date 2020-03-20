import React from 'react'

import {tshirtRib, tshirtDark, tshirtGate} from '../../helpers/images'
import ItemDetails from "../works/itemDetails";

const TshirtsDetails = props => {

    const imports = [tshirtRib, tshirtDark, tshirtGate];
    const names = ['Rock In Bourlon', 'Darkspace', "Ëmgalaï's Gate"];

    const texts = [null, null, null];

    const indexes = [
        [], //rib
        [0, 1], //darkspace
        [0, 1] //gate
    ];

    const smallIndexes = [
        [], //rib
        [], //darkspace
        [] //gate
    ];

    const sizes = [
        1, //rib
        2, //darkspace
        3, //gate
    ];

    const videos = [null, null, null];

    return (
        <ItemDetails imports={imports} names={names} indexes={indexes} smallIndexes={smallIndexes} sizes={sizes}
                     texts={texts} videos={videos} id={props.match.params.id}/>
    )
};

export default TshirtsDetails