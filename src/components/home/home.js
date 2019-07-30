import React from "react"
import ReactPlayer from "react-player";
import FacebookPlayer from 'react-fb-player'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./home.css"

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            player: null
        }
    }

    onReady = (id, player) => {
        this.setState({
            player: player,
        });
    };

    playVideo = () => {
        console.log('play video');
        const { player } = this.state;
        if (player) player.play();
    };

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
                        {/*<ReactPlayer url='https://www.facebook.com/emgalai/videos/752027961625429/'*/}
                        {/*             playing={true} volume={0} muted={true} loop/>*/}
                        <FacebookPlayer appId={723499361416854} videoId={752027961625429} autoplay={true}
                                        onReady={this.onReady} onFinishedPlaying={this.playVideo}/>
                    </div>
                </Carousel>
            </div>
        )
    }
}

export default Home;