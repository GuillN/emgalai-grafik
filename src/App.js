import React from 'react';
import './App.css';

import Nav from './components/nav/nav'
import Footer from './components/footer/footer'
import Home from './components/home/home'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Portfolio from './components/portfolio/portfolio'
import Identity from './components/identity/identity'
import Music from './components/music/music'
import Posters from './components/posters/posters'
import Editions from './components/editions/editions'
import Teasers from './components/teasers/teasers'
import Logos from './components/logos/logos'

import {Router, Route} from 'react-router-dom';
import { history } from './helpers/history';

function App() {
    return (
        <div className="App">

            <Router history={history}>

                <Nav/>

                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
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
