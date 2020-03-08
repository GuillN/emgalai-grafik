import React from "react"
import "./emgalai.css"
import { Carousel } from "react-responsive-carousel"
import {MobileView, BrowserView} from "react-device-detect"
import "react-responsive-carousel/lib/styles/carousel.min.css";

import CarouselPane from "./carouselPane";
import Nav from "../nav/nav";
import Footer from "../footer/footer";


class Emgalai extends React.Component {

    render() {
        return(
            <div>
                <BrowserView>
                    <Nav print={false}/>
                    <Carousel showThumbs={false} showStatus={false} stopOnHover={false} className="carousel"
                              autoPlay infiniteLoop interval={12000} dynamicHeight>
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
                </BrowserView>
                <MobileView>
                    <div style={{backgroundColor: 'black', height: '100vh'}}>
                        <Nav/>
                        <Footer/>
                    </div>
                </MobileView>
            </div>
        )
    }
}

export default Emgalai;