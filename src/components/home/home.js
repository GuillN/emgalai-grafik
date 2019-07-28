import React from "react"
import ReactPlayer from "react-player";
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./home.css"

class Home extends React.Component {
    render() {
        return(
            <div className="">
                <Carousel showThumbs={false} showStatus={false} stopOnHover={false} className="carousel"
                          autoPlay infiniteLoop interval={12000}>
                    <div className="carousel-pane">
                        <ReactPlayer url='https://www.facebook.com/emgalai/videos/262610617954917/'
                                     playing volume={0} muted loop/>
                    </div>
                    <div className="carousel-pane">
                        <ReactPlayer url='https://www.facebook.com/emgalai/videos/1072535196279459/'
                                     playing={true} volume={0} muted={true} loop/>
                    </div>
                    <div className="carousel-pane">
                        <ReactPlayer url='https://www.facebook.com/emgalai/videos/978901818938041/'
                                     playing={true} volume={0} muted={true} loop/>
                    </div>
                    <div className="carousel-pane">
                        <ReactPlayer url='https://www.facebook.com/emgalai/videos/876609339167290/'
                                     playing={true} volume={0} muted={true} loop/>
                    </div>
                    <div className="carousel-pane">
                        <ReactPlayer url='https://www.facebook.com/emgalai/videos/752027961625429/'
                                     playing={true} volume={0} muted={true} loop/>
                    </div>
                </Carousel>
            </div>
        )
    }
}

export default Home;