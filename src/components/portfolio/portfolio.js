import React from "react"
import "./portfolio.css"
import {Link} from "react-router-dom";

import visu from '../../images/picto-visu.jpg'
import zik from '../../images/picto-zik.jpg'
import seri from '../../images/picto-seri.jpg'
import edition from '../../images/picto-edition.jpg'
import montage from '../../images/picto-montage.jpg'
import logo from '../../images/picto-logo.jpg'


class Portfolio extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <Link to="/visual-identities" className="picto-link">
                        <div className="img">
                            <img src={visu} alt="visual identity"/>
                            <p>Visual</p>
                            <p>Identity</p>
                        </div>
                    </Link>
                    <Link to="/music" className="picto-link">
                        <div className="img">
                            <img src={zik} alt="music"/>
                            <p>Music</p>
                        </div>
                    </Link>
                    <Link to="/posters" className="picto-link">
                        <div className="img">
                            <img src={seri} alt="silkprint"/>
                            <p>Silkprinting</p>
                            <p>/ Posters</p>
                        </div>
                    </Link>
                </div>
                <div className="row">
                    <Link to="/editions" className="picto-link">
                        <div className="img">
                            <img src={edition} alt="editions"/>
                            <p>Editions</p>
                        </div>
                    </Link>
                    <Link to="/teasers" className="picto-link">
                        <div className="img">
                            <img src={montage} alt="editing"/>
                            <p>Video</p>
                            <p>Editing</p>
                        </div>
                    </Link>
                    <Link to="/logos" className="picto-link">
                        <div className="img">
                            <img src={logo} alt="logos"/>
                            <p>Logos</p>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Portfolio;