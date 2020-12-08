import React from "react";
import {Route} from "react-router-dom";
import Home from "./components/home/home";
import Portfolio from "./components/portfolio/portfolio";
import Print from "./components/print/print";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Previewer from "./components/previewer/Previewer";
import Displayer from "./components/displayer/Displayer";
import PostersDetails from "./components/works/postersDetails";
import Shop from "./components/shop/shop";
import Devis from "./components/devis/devis";
import Openings from "./components/openings/openings";

export default () => {
    return <div>
        <div>
            <Route path="/" exact component={Home}/>
            <Route path="/portfolio" exact component={Portfolio}/>
            <Route path="/print" exact component={Print}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/works" exact component={Previewer}/>
            <Route path="/works/:id" component={Displayer}/>
            <Route path="/posters" component={PostersDetails}/>
            <Route path="/logos" component={Displayer}/>
            <Route path="/shop" component={Shop}/>
            <Route path="/devis" component={Devis}/>
            <Route path="/prints" exact component={Previewer}/>
            <Route path="/prints/:id" component={Displayer}/>
            <Route path="/tshirts" exact component={Previewer}/>
            <Route path="/tshirts/:id" component={Displayer}/>
            <Route path="/openings" component={Openings}/>
        </div>
    </div>
}
