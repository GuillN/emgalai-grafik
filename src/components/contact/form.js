import React from 'react'
import {animated, useSpring} from "react-spring";
import useScript from "../../helpers/useScript";

const Form = () => {

    useScript("https://smtpjs.com/v3/smtp.js");

    const sendMail = (subject, body, from) => {
        // eslint-disable-next-line no-undef
        Email.send({
            SecureToken: '0fc5585e-2dd8-4d62-b079-d35132015e25',
            To : 'gnaassan@gmail.com',
            From : from,
            Subject : subject,
            Body : body
        })
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target[0].value);
        sendMail(e.target[2].value, e.target[3].value, e.target[1].value)
    };

    const fade2 = useSpring({
        from: {opacity: 0}, opacity: 1, delay: 500,
        config: {duration: 500}
    });

    return (
        <animated.form style={fade2} className="inputs"  onSubmit={handleSubmit}>
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
    )
};

export default Form