import React from 'react'

import {logos} from '../../helpers/images'
import ItemDetails from "./itemDetails";

const LogosDetails = () => {

    const imports = [logos];

    const names = ['Logos'];

    const texts = [null];

    const indexes = [
        []
    ];

    const smallIndexes = [
        []
    ];

    const sizes = [7];

    const videos = [null];

    return (
        <ItemDetails imports={imports} names={names} indexes={indexes} smallIndexes={smallIndexes} sizes={sizes}
                     texts={texts} videos={videos} id={0}/>
    )
};

export default LogosDetails
