import {Route} from "react-router-dom";
import Home from "./components/home/home";
import Portfolio from "./components/portfolio/portfolio";
import Print from "./components/print/print";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Works from "./components/works/works";
import WorksDetails from "./components/works/worksDetails";
import PostersDetails from "./components/works/postersDetails";
import LogosDetails from "./components/works/logosDetails";
import Shop from "./components/shop/shop";
import Devis from "./components/devis/devis";
import Prints from "./components/prints/prints";
import PrintsDetails from "./components/prints/printsDetails";
import Tshirts from "./components/prints/tshirts";
import TshirtsDetails from "./components/prints/tshirtsDetails";
import Openings from "./components/openings/openings";
import React from "react";

export default () => {
    return (
        <div>
            <div>
                <Route path="/" exact component={Home} />
                <Route path="/portfolio" exact component={Portfolio}/>
                <Route path="/print" exact component={Print}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/works" exact component={Works}/>
                <Route path="/works/:id" component={WorksDetails}/>
                <Route path="/posters" component={PostersDetails}/>
                <Route path="/logos" component={LogosDetails}/>
                <Route path="/shop" component={Shop}/>
                <Route path="/devis" component={Devis}/>
                <Route path="/prints" exact component={Prints}/>
                <Route path="/prints/:id" component={PrintsDetails}/>
                <Route path="/tshirts" exact component={Tshirts}/>
                <Route path="/tshirts/:id" component={TshirtsDetails}/>
                <Route path="/openings" component={Openings}/>
            </div>
        </div>
    )
}