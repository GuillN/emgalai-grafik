import React, {useState, useEffect} from "react"
import {MobileView, BrowserView} from "react-device-detect"
import {Link} from "react-router-dom";
import {history} from "../../helpers/history";
import {printUrls, whiteUrls} from "../../helpers/urlGroups";
import './nav.css'
import logo1Black from "../../images/logo.svg";
import logo1White from "../../images/logo-whito.svg";
import logo2Black from "../../images/emgalaiprint SIMPLE logo.svg";
import logo2White from "../../images/emgalaiprint SIMPLE logoBLANC.png";
import NavLink from "./NavLink";
import NavDropLink from "./NavDropLink";
import NavDropLinkMobile from "./NavDropLinkMobile";

const Nav = () => {
    const [isWhite] = useState(whiteUrls.includes(history.location.pathname))
    const [isPrint] = useState(printUrls.includes(history.location.pathname.split('/')[1]))

    const [logo, setLogo] = useState()

    const [isPoster] = useState(history.location.pathname === '/posters')

    useEffect(() => {
        setLogo(isPrint ? isWhite ? logo2White : logo2Black : isWhite ? logo1White : logo1Black)
    }, [isPrint, isWhite])

    return <div>

        {/*LOGO*/}
        <header style={isPoster ? {backgroundColor: 'black'} : {}} className="header">
            <Link to="/" className="logo-link">
                <img src={logo} className="logo" alt="logo"/>
            </Link>
        </header>

        {/*LINKS*/}
        <BrowserView>
            <section style={isPoster ? {backgroundColor: 'black'} : {}} className="nav">
                <NavLink isWhite={isWhite} text={'about'}/>

                <NavLink isWhite={isWhite} text={isPrint ? 'devis' : 'contact'}/>

                {isPrint ?
                    <NavDropLink isWhite={isWhite} text={'prints'}/> :
                    <NavDropLink isWhite={isWhite} text={'works'}/>
                }

                {isPrint ?
                    <></> :
                    <NavDropLink isWhite={isWhite} text={'shop'}/>
                }
            </section>
        </BrowserView>
        <MobileView>
            <section style={isPoster ? {backgroundColor: 'black'} : {}} className="nav">
                {!isPrint && <NavLink isWhite={isWhite} text={'about'}/>}

                <NavLink isWhite={isWhite} text={isPrint ? 'devis' : 'contact'}/>

                {isPrint ?
                    <NavLink isWhite={isWhite} text={'prints'}/> :
                    <NavDropLinkMobile isWhite={isWhite} text={'works'}/>
                }

                {isPrint ?
                    <NavLink isWhite={isWhite} text={'openings'}/> :
                    <NavDropLinkMobile isWhite={isWhite} text={'shop'}/>
                }
            </section>
        </MobileView>
    </div>
}

export default Nav
