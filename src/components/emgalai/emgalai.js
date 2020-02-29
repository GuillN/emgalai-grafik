import React from "react"
import "./emgalai.css"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselPane from "./carouselPane";
import Nav from "../nav/nav";
import Footer from "../footer/footer";


class Emgalai extends React.Component {

    render() {
        return(
            <div>
                <Nav print={false}/>
                <Carousel showThumbs={false} showStatus={false} stopOnHover={false} className="carousel"
                          autoPlay infiniteLoop interval={12000}>
                    <div>
                        <CarouselPane videoId={978901818938041}/>
                    </div>
                    <div>
                        <CarouselPane videoId={876609339167290}/>
                    </div>
                    <div>
                        <CarouselPane videoId={752027961625429}/>
                    </div>
                    <div>
                        <CarouselPane videoId={262610617954917}/>
                    </div>
                    <div>
                        <CarouselPane videoId={1072535196279459}/>
                    </div>
                </Carousel>
                <Footer/>
            </div>
        )
    }
}

export default Emgalai;