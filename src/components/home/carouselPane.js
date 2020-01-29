import React from "react"
import ReactPlayer from "react-player";

class CarouselPane extends React.Component {

    render() {
        const url = `https://www.facebook.com/emgalai/videos/${this.props.videoId}/`;
        return (
            <div className="carousel-pane">
                <ReactPlayer url={url} playing muted loop/>
            </div>
        )
    }
}

export default CarouselPane;