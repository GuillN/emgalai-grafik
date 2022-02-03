import React from "react";
import {Switch, Route} from "react-router-dom";
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

export default () => {
    return <div>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/portfolio" exact component={Portfolio}/>
            <Route path="/print" exact component={Print}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/works" exact component={Previewer}/>
            <Route path="/works/:id" component={Displayer}/>
            <Route path="/posters" exact component={PostersDetails}/>
            <Route path="/logos" component={Displayer}/>
            <Route path="/shop" component={Shop}/>
            <Route path="/devis" component={Devis}/>
            <Route key="tsh" path="/tshirts" exact component={Previewer}/>
            <Route path="/tshirts/:id" component={Displayer}/>
            <Route key="vyl" path="/vinyls" exact component={Previewer}/>
            <Route path="/vinyls/:id" component={Displayer}/>
            <Route key="cd" path="/cd" exact component={Previewer}/>
            <Route path="/cd/:id" component={Displayer}/>
            <Route key="k7" path="/cassettes" exact component={Previewer}/>
            <Route path="/cassettes/:id" component={Displayer}/>
            <Route key="pst" path="/postersprint" exact component={Previewer}/>
            <Route path="/postersprint/:id" component={Displayer}/>
            <Route key="misc" path="/divers" component={Previewer}/>
            <Route path="/nespresso" component={Displayer}/>
        </Switch>
    </div>
}
