import React from "react"
import "./home.css"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselPane from "./carouselPane";


class Home extends React.Component {

    render() {
        return(
            <div className="">
                <Carousel showThumbs={false} showStatus={false} stopOnHover={false} className="carousel"
                          autoPlay infiniteLoop interval={12000}>
                    <div>
                        <CarouselPane videoId={262610617954917}/>
                    </div>
                    <div>
                        <CarouselPane videoId={1072535196279459}/>
                    </div>
                    <div>
                        <CarouselPane videoId={978901818938041}/>
                    </div>
                    <div>
                        <CarouselPane videoId={876609339167290}/>
                    </div>
                    <div>
                        <CarouselPane videoId={752027961625429}/>
                    </div>
                </Carousel>
            </div>
        )
    }
}

export default Home;