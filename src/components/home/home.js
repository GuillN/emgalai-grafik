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
                          autoPlay infiniteLoop interval={6000}>
                    <div className="carousel-pane">
                        <ReactPlayer url='https://www.youtube.com/embed/yBLdQ1a4-JI?rel=0&modestbranding=1&autohide=1&showinfo=0'
                                     playing={true} volume={0} muted={true} loop/>
                    </div>
                    <div className="carousel-pane">
                        <ReactPlayer url='https://www.youtube.com/watch?v=GDflVhOpS4E'
                                     playing={true} volume={0} muted={true} loop/>
                    </div>
                </Carousel>
            </div>
        )
    }
}

export default Home;