import React from "react"
import "./footer.css"

import twitter from '../../images/twitter.svg'
import facebook from '../../images/facebook.svg'
import instagram from '../../images/instagram.svg'
import behance from '../../images/behance.svg'
import twitterWhite from '../../images/twitter-whito.svg'
import facebookWhite from '../../images/facebook-whito.svg'
import instagramWhite from '../../images/instagram-whito.svg'
import behanceWhite from '../../images/behance-whito.svg'

class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            twitter: twitterWhite,
            facebook: facebookWhite,
            instagram: instagramWhite,
            behance: behanceWhite
        };
        Footer.toBlack = Footer.toBlack.bind(this);
        Footer.toWhite = Footer.toWhite.bind(this)
    }

    static toWhite() {
        this.setState({
            twitter: twitterWhite,
            facebook: facebookWhite,
            instagram: instagramWhite,
            behance: behanceWhite
        })
    }

    static toBlack() {
        this.setState({
            twitter: twitter,
            facebook: facebook,
            instagram: instagram,
            behance: behance
        })
    }


    render() {
        const {twitter, facebook, instagram, behance} = this.state;

        return(
            <div className="footer">
                <a><img src={twitter} alt="twitter" className="img"/></a>
                <a><img src={facebook} alt="facebook" className="img"/></a>
                <a><img src={instagram} alt="instagram" className="img"/></a>
                <a><img src={behance} alt="behance" className="img"/></a>
            </div>
        )
    }
}

export default Footer;