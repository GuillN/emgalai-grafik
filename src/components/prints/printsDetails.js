import React from 'react'

import {vinyls, cassettes} from '../../helpers/images'
import ItemDetails from "../works/itemDetails";

const PrintsDetails = props => {

    const imports = [vinyls, cassettes];
    const names = ['Vinyls', 'Cassettes'];

    const texts = [null, null];

    const indexes = [
        [0, 1], //vinyls
        [0, 1] //cassettes
    ];

    const smallIndexes = [
        [],
        [2, 3, 4]
    ];

    const sizes = [
        3, //vinyls
        5 //cassettes
    ];

    const videos = [null, null];

    return (
        <ItemDetails imports={imports} names={names} indexes={indexes} smallIndexes={smallIndexes} sizes={sizes}
                     texts={texts} videos={videos} id={props.match.params.id}/>
    )
};

export default PrintsDetails