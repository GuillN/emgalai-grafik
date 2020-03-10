import React from 'react';
import {Router, Route} from 'react-router-dom';
import { history } from './helpers/history';
import './App.css';

import Home from './components/home/home'
import Emgalai from "./components/emgalai/emgalai";
import Print from "./components/print/print";
import About from './components/about/about'
import Contact from './components/contact/contact'
import Portfolio from './components/portfolio/portfolio'
import PortfolioDetails from "./components/portfolio/portfolioDetails";
import Shop from "./components/shop/shop";
import Devis from "./components/devis/devis";
import Prints from "./components/prints/prints";
import PrintsDetails from "./components/prints/printsDetails";
import Openings from "./components/openings/openings";

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
                <Route path="/devis" component={Devis}/>
                <Route path="/prints" exact component={Prints}/>
                <Route path="/prints/:id" component={PrintsDetails}/>
                <Route path="/openings" component={Openings}/>

            </Router>

        </div>
    );
};

export default App;
