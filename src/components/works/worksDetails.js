import React from 'react'

import {aluk, conan, cult, darkspace, doom, escarion, glazart, goblin, godflesh, hifi, king, metalorgie, mysticum,
    rio, sunn, ulver} from '../../helpers/images'
import ItemsDetails from "../items/itemsDetails";

const WorksDetails = props => {

    const imports = [aluk, conan, cult, darkspace, doom, escarion, glazart, goblin, godflesh, hifi, king, metalorgie,
        mysticum, rio, sunn, ulver];
    const names = ['Aluk Todolo', 'Conan', 'Cult Of Fire', 'Darkspace', "Doom", "Escarion", "Glazart", 'Goblin',
        'Godflesh', "Hifi Store", "King Dude", "Metalorgie Fest", "Mysticum", "RIO", "Sunn O)))", "Ulver"];
    const texts = [
        "Poster / T-Shirt / Tote bag for the french blackened kraut rock band Aluk Todolo\n\nLimited screenprinted poster for the Lille show\nLimited to 25 copies", //aluk todolo
        "'Guardians of Heaviness'merch for the UK caveman doom band Conan\n\nLimited 3 colors screenprinted poster for the french shows\nLimited to 50 copies", //conan
        "Limited screenprinted poster for the black metal band Cult of Fire playing at 'Feux de Beltane' festival\nInk made with pigments from indian traditional holi ceremony and spices\nPigments are mixed with water from Gange river\nHomemade paper made by hand in Nepal\n\nThanks to Capitaine Max for those ingredients", //cult
        //facebook.com/capitainemaxphotography/
        "Limited screenprinted poster for the industrial black metal band Darkspace playing at 'Feux de Beltane' festival\nPoster incrusted with meteorite powder\nProcess on the video\nLimited to 40 copies", //darkspace
        "Screenprinted poster for the UK crust legends Doom\nSpecial ink mixed with ashes of a tear gas grenade puck, found during a 'gilet jaune' protest.\nProcess on the video\nLimited to 50 copies\nAnarchy, Equality and fuck police brutality and Macron fuckin' corrupted system", //doom
        "Cover design made for the Australian death metal band Escarion", //escarion
        "Artworks for the night club Glazart, porte de la Villette - Paris", //glazart
        "Graphics for the special show of legendary italian progressive rock band Goblin, playing at Le Flow - Paris\nFlyer / collector tickets / coasters and limited gatefold screenprinted poster\nProcess on the video made by Guillaume Quincy", //goblin
        "Limited screenprinted poster for the UK industrial gods Godflesh playing at Roadburn festival in 2018\nPoster laminated with aluminum paper\n Limited to 55 copies", //godflesh
        "Graphics for the Hifi store - Paris\n", //hifi
        "Limited screenprinted poster for the US dark folk band King Dude\nPoster laminated with real snake skin\nDesign reused for the french show at 'LaPlage de Glazart'\nProcess on the video made by Guillaume Quincy\nLimited to 50 copies", //king dude
        "Designs for the French webzine Metalorgie's Festival\nLogo / flyers / ads / limited screenprinted poster\nLimited to 30 copies", //metalorgie
        "Designs for the show of the Norwegian industrial black metal pioneers Mysticum playing at Le Flow - Paris\nFlyers / exclusive t-shirt / screenprinted poster limited to 30 copies\n\nDesign used for Headbang Brewery who made a beer especially for the show", //mysticum
        "This was my last year project of my graphic design studies at LISAA\nI redesigned all the graphics of the Rock in Opposition Festival taking place at Albi on an old industrial land\nThis is an underground festival about RIO music / progressive rock / Canterbury scene", //rio
        "Limited screenprinted poster for US drone metal pioneers SunnO))) playing at Paradiso - Amsterdam\nLimited to 50 copies, mirror paper pasted on the poster", //sunnO)))
        "Limited screeprinted poster for 'The Assassination of Julius Caesar' tour of the Norwegian band Ulver\nLimited to 80 copies and incrusted with real bay leaves\n\nProcess on the video by Guillaume Quincy" //ulver
    ];

    const indexes = [
        [1, 2], //aluk todolo
        [2, 3, 4, 5], //conan
        [1, 2, 3, 4], //cult
        [1, 2, 3, 4], //darkspace
        [1, 2], //doom
        [], //escarion
        [], //glazart
        [3, 4, 5, 6], //goblin
        [1, 2], //godflesh
        [], //hifi
        [], //king dude
        [0, 1], //metalorgie
        [0, 1], //mysticum
        [], //rio
        [], //sunnO)))
        [1, 2, 3, 4] //ulver
    ];
    const smallIndexes = [
        [], //aluk todolo
        [], //conan
        [], //cult
        [], //darkspace
        [], //doom
        [], //escarion
        [], //glazart
        [], //goblin
        [], //godflesh
        [], //hifi
        [], //king dude
        [], //metalorgie
        [], //mysticum
        [], //rio
        [1, 2, 3], //sunnO)))
        [] //ulver
    ];
    const sizes = [
        4, //aluk todolo
        6, //conan
        5, //cult
        6, //darkspace
        3, //doom
        1, //escarion
        6, //glazart
        7, //goblin
        4, //godflesh
        4, //hifi
        5, //king dude
        9, //metalorgie
        10, //mysticum
        9, //rio
        4, //sunnO)))
        6 //ulver
    ];
    const videos = [
        null, null, null,
        978901818938041, // darkspace
        1072535196279459, //doom
        null, null,
        262610617954917, // goblin
        null, null,
        752027961625429, // king dude
        null, null, null, null,
        876609339167290 // ulver
    ];

    return (
        <ItemsDetails imports={imports} names={names} indexes={indexes} smallIndexes={smallIndexes} sizes={sizes}
                      texts={texts} videos={videos} print={false} id={props.match.params.id}/>
    )
};

export default WorksDetails