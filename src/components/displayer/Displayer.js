import React, {useEffect, useState} from 'react'
import {animated, useSpring} from "react-spring";
import ReactPlayer from "react-player";
import PopupImage from "../items/popupImage";
import {MobileView, BrowserView} from "react-device-detect"
import {
    visuIdArray,
    logoArray,
    tshirtArray,
    musicArray,
    workArray,
    cassetteArray,
    vinylArray,
    cdArray,
    othersArray
} from "../../helpers/imageArrays";
import {history} from "../../helpers/history";
import './Displayer.css'
import Nav from "../nav/Nav";

// TODO refactor css
// This component displays formatted popup images from an image array
const Displayer = props => {

    const [id] = useState(props.match.params.id)
    const [pathName] = useState(history.location.pathname.split('/')[history.location.pathname.split('/').length - 2])
    const [client, setClient] = useState({})
    const [images, setImages] = useState([])
    const [isPrint, setIsPrint] = useState(false)

    useEffect(() => {
        switch (pathName) {
          case 'visual-identity':
            setClient(visuIdArray[id])
            setImages(visuIdArray[id].images)
            break
            case 'works':
                setClient(workArray[id])
                setImages(workArray[id].images)
                break
            // todo
            case 'music':
                setClient(musicArray[id])
                setImages(musicArray[id].images)
                break
            case 'logos':
                setClient(logoArray)
                setImages(logoArray.images)
                break
            // case 'prints':
            //     setClient(workshopArray[id])
            //     setImages(workshopArray[id].images)
            //     setIsPrint(true)
            //     break
            case 'tshirts':
                setClient(tshirtArray[id])
                setImages(tshirtArray[id].images)
                setIsPrint(true)
                break
          case 'vinyls':
              setClient(vinylArray[id])
              setImages(vinylArray[id].images)
              break
          case 'cd':
              setClient(cdArray[id])
              setImages(cdArray[id].images)
              break
          case 'cassettes':
              setClient(cassetteArray[id])
              setImages(cassetteArray[id].images)
              break
            //todo
          // case 'posters':
          //     setClient(posterArray[id])
          //     setImages(posterArray[id].images)
          //     break
            case 'divers':
                setClient(othersArray[id])
                setImages(othersArray[id].images)
                setIsPrint(true)
            default:
                break
        }
    }, [id, pathName])

    const fade = useSpring({
        from: {opacity: 0,}, opacity: 1,
        config: {duration: 1000}
    })

    const mapper = (item, index) => {
        if (client.videoIndex !== undefined && client.videoIndex.includes(index)) {
            return <animated.div style={fade} kay={index} className="details-frame-big">
                <ReactPlayer key={index} url={`https://www.youtube.com/watch?v=${item}`}/>
            </animated.div>
        }
        if (client.medIndex.includes(index)) {
            return <animated.div style={fade} key={index} className="details-frame-med">
                <PopupImage index={index} item={item} id={id} images={images} sizes={client.images.length}/>
            </animated.div>
        } else if (client.smallIndex.includes(index)) {
            return <animated.div style={fade} key={index} className="details-frame-small">
                <PopupImage index={index} item={item} id={id} images={images} sizes={client.images.length}/>
            </animated.div>
        } else {
            return <animated.div style={fade} key={index} className={client.title === 'Glazart' ? "details-frame-tiny" :
                "details-frame-big"}>
                <PopupImage index={index} item={item} id={id} images={images} sizes={client.images.length}/>
            </animated.div>
        }
    }

    const mobileMapper = (item, index) => {
        return <animated.div>
            <PopupImage index={index} item={item} id={id} images={images} sizes={client.images.length}/>
        </animated.div>
    }

    let img = images.map(mapper)
    let imgMobile = images.map(mobileMapper)
    const videoId = client.video
    const url = `https://www.youtube.com/watch?v=${videoId}/`

    return <div>
        <Nav print={isPrint}/>
        <div className="details-container">
            <h1>{client.title}</h1>
            {client.text == null ? "" : <p className="description">{client.text}</p>}
            <BrowserView>
                <div className="details-grid">
                    {img}
                    {videoId == null ? "" : <ReactPlayer className="details-video" url={url} controls/>}
                </div>
            </BrowserView>

            <MobileView>
                <div className="details-grid-mobile">
                    {imgMobile}
                    {videoId == null ? "" : <ReactPlayer className="details-video" url={url} controls/>}
                </div>
            </MobileView>
        </div>
    </div>
}

export default Displayer
