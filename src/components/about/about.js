import React from "react"
import './about.css';
import logo from '../../images/logo.svg'

class About extends React.Component {
    render() {
        return(
            <div className="content">
                <img src={logo} alt="logo"/> {/*todo change logo*/}
                <h1>Ëmgalaï Grafik</h1>
                <p>Ëmgalaï is a graphic designer & illustrator based in Paris</p>
                <p>Ëmgalaï started in 2015, after joining Glazart & the Stoned Gatherings crew in Paris to work on flyers and gig posters</p>
                <p>So far he worked with many stoner/doom/drone/metal bands like : Ulver, Venom, Godflesh, King Dude, Magma,</p>
                <p>Boris, Kvelertak, My Sleeping Karma, Elder, Cough, Acid King...</p>
            </div>
        )
    }
}

export default About;