import React, {useState} from "react"
import back from "../../images/back.svg";
import next from "../../images/next.svg";
import Popup from "reactjs-popup";
import Image from "./image";

const PopupImage = props => {
    const [modalIndex, setModalIndex] = useState(0);

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
                <Image alt={props.index} src={props.item} mobile={false} popup/>
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