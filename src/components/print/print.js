import React from "react"
import Nav from "../nav/nav";
import Footer from "../footer/footer";

const Print = () => {
    return(
        <div style={{backgroundColor: 'black', height: '100vh'}}>
            <Nav print={true}/>

            <Footer/>
        </div>
    )
};

export default Print;