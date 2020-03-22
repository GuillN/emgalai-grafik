import React from 'react'

import {logos} from '../../helpers/images'
import ItemsDetails from "../items/itemsDetails";

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
        <ItemsDetails imports={imports} names={names} indexes={indexes} smallIndexes={smallIndexes} sizes={sizes}
                      texts={texts} videos={videos} print={false} id={0}/>
    )
};

export default LogosDetails
