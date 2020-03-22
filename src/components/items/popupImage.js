import React, {useState} from "react"
import LazyLoad from "react-lazy-load";
import back from "../../images/back.svg";
import next from "../../images/next.svg";
import Popup from "reactjs-popup";

const PopupImage = props => {
    const [modalIndex, setModalIndex] = useState(0);
    const [load, setLoad] = useState("loading");

    const handleLoaded = () => {
        setLoad("loaded")
    };

    const init = index => {
        setModalIndex(index)
    };

    const increment = () => {
        setModalIndex(modalIndex+1)
    };

    const decrement = () => {
        setModalIndex(modalIndex-1)
    };

    return (
        <Popup trigger={
            <div>
                {load === "loading" ? <div>Loading...</div> : ""}
                <LazyLoad>
                    <img onLoad={handleLoaded} alt={props.index} src={props.item} className="portfolio-details-image"/>
                </LazyLoad>
            </div>
        } modal closeOnEscape onOpen={() => {init(props.index)}}>
            <div className="modal-container">
                {modalIndex === 0 ? "" :
                    <img src={back} alt="back" className="left-arrow" onClick={decrement}/>}
                <div className="modal">
                    <img alt={modalIndex} src={props.images[modalIndex]} className="modal-image"/>
                </div>
                {modalIndex === props.sizes[props.id] - 1 ? "" :
                    <img src={next} alt="next" className="right-arrow" onClick={increment}/>}
            </div>
        </Popup>
    )
};

export default PopupImage