import React from 'react';
import './App.css';

import Home from './components/home/home'
import Emgalai from "./components/emgalai/emgalai";
import Print from "./components/print/print";
import About from './components/about/about'
import Contact from './components/contact/contact'
import Portfolio from './components/portfolio/portfolio'
import PortfolioDetails from "./components/portfolio/portfolioDetails";
import Shop from "./components/shop/shop";

import {Router, Route} from 'react-router-dom';
import { history } from './helpers/history';

const App = () => {
    return (
        <div className="App">

            <Router history={history}>

                <Route path="/" exact component={Home} />
                <Route path="/emgalai" exact component={Emgalai}/>
                <Route path="/print" exact component={Print}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/portfolio" exact component={Portfolio}/>
                <Route path="/portfolio/:id" component={PortfolioDetails}/>
                <Route path="/shop" component={Shop}/>

            </Router>

        </div>
    );
};

export default App;
