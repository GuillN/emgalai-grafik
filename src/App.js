import React from 'react';
import './App.css';

import About from './components/about/about'
import Home from './components/home/home'
import Footer from "./components/footer/footer";
import Portfolio from "./components/portfolio/portfolio";
import Identity from "./components/identity/identity"
import Music from "./components/music/music"
import Posters from "./components/posters/posters"
import Editions from "./components/editions/editions"
import Teasers from "./components/teasers/teasers"
import Logos from "./components/logos/logos"

import {Router, Route, Link} from "react-router-dom";
import { history } from "./helpers/history";

import logo from './images/logo.svg';

function App() {
    return (
        <div className="App">

            <Router history={history}>
                <header className="header">
                    <Link to="/" className="logo-link">
                        <img src={logo} className="logo" alt="logo" />
                    </Link>
                </header>

                <section className="nav">
                    <Link to="/about" className="nav-link">ABOUT</Link>
                    <Link to="/contact" className="nav-link">CONTACT</Link>
                    <Link to="/portfolio" className="nav-link">PORTFOLIO</Link>
                    <a target="_blank" rel="noopener noreferrer" href="https://emgalaishop.bigcartel.com/" className="nav-link">SHOP</a>
                </section>

                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/portfolio" component={Portfolio}/>
                <Route path="/visual-identities" component={Identity}/>
                <Route path="/music" component={Music}/>
                <Route path="/posters" component={Posters}/>
                <Route path="/editions" component={Editions}/>
                <Route path="/teasers" component={Teasers}/>
                <Route path="/logos" component={Logos}/>

            </Router>

            <Footer/>
        </div>
    );
}

export default App;
