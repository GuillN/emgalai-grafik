import React from "react"
import "./footer.css"

import twitter from '../../images/twitter.png'
import behance from '../../images/behance.png'

class Footer extends React.Component {
    render() {
        return(
            <div className="footer"> {/*todo add links and fb, insta*/}
                <a><img src={twitter} alt="twitter" className="img"/></a>
                <a><img src={behance} alt="behance" className="img"/></a>
            </div>
        )
    }
}

export default Footer;