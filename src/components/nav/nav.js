import React from "react"
import {Link} from "react-router-dom";
import './nav.css'
import {history} from "../../helpers/history";
import logo from "../../images/logo.svg";
import logoWhite from "../../images/logo-whito.svg";

class Nav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            logo: logoWhite,
            navStyle: {
                color: 'white'
            }
        };
        this.navStyleBlack = this.navStyleBlack.bind(this);
        this.navStyleWhite = this.navStyleWhite.bind(this)
    }

    componentDidMount() {
        const path = history.location.pathname;
        if (path === '/') {
            this.navStyleWhite()
        } else {
            this.navStyleBlack()
        }
    }

    navStyleWhite() {
        this.setState({
            logo: logoWhite,
            navStyle: {
                color: 'white'
            }
        })
    }

    navStyleBlack() {
        this.setState({
            logo: logo,
            navStyle: {
                color: 'black'
            }
        })
    }

    render() {
        const {logo, navStyle} = this.state;

        return(
            <div>
                <header className="header">
                    <Link to="/" className="logo-link" onClick={this.navStyleWhite}>
                        <img src={logo} className="logo" alt="logo" />
                    </Link>
                </header>
                <section className="nav">
                    <Link to="/about" className="nav-link" style={navStyle} onClick={this.navStyleBlack}>ABOUT</Link>
                    <Link to="/contact" className="nav-link" style={navStyle} onClick={this.navStyleBlack}>CONTACT</Link>
                    <Link to="/portfolio" className="nav-link" style={navStyle} onClick={this.navStyleBlack}>PORTFOLIO</Link>
                    <a target="_blank" rel="noopener noreferrer" href="https://emgalaishop.bigcartel.com/"
                       className="nav-link" style={navStyle}>SHOP</a>
                </section>
            </div>
        )
    }
}

export default Nav;