import React from "react"
import './contact.css'

import phone from '../../images/phone-icon.png'
import email from '../../images/email-icon.png'
import Nav from "../nav/nav";
import Footer from "../footer/footer";
import {useSpring, animated} from "react-spring";

const Contact = () => {

    const fade1 = useSpring({
        from: {opacity: 0},opacity: 1,
        config: {duration: 500}
    });

    const fade2 = useSpring({
        from: {opacity: 0}, opacity: 1, delay: 500,
        config: {duration: 500}
    });

    return(
        <div>
            <Nav print={false}/>
            <div className="contact-content">
                <animated.div style={fade1} className="text">
                    <h1>CONTACT ME</h1>
                    <hr className="line"/>
                    <h2>Ëmgalaï Grafik</h2>
                    <div className="small-container">
                        <img src={email} alt="mail"/>
                        <p>emgalai.grafik@gmail.com</p>
                    </div>
                    <div className="small-container">
                        <img src={phone} alt="phone"/>
                        <p>06 25 66 84 63</p>
                    </div>
                </animated.div>

                <animated.form style={fade2} className="inputs">
                    <label className="input">
                        <input type="text" placeholder="&nbsp;" className="inp"/>
                        <span className="label">Name *</span>
                        <span className="border"/>
                    </label>

                    <label className="input">
                        <input type="text" placeholder="&nbsp;" className="inp"/>
                        <span className="label">Email *</span>
                        <span className="border"/>
                    </label>

                    <label className="input">
                        <input type="text" placeholder="&nbsp;" className="inp"/>
                        <span className="label">Subject</span>
                        <span className="border"/>
                    </label>

                    <label className="input">
                        <textarea placeholder="&nbsp;" className="inp ta"/>
                        <span className="label">Message</span>
                        <span className="border"/>
                    </label>

                    <input type="submit" value="Send" className="submit"/>
                </animated.form>
            </div>
            <Footer/>
        </div>
    )
};

export default Contact;