import React, {useEffect} from "react"
import Nav from "../nav/nav";
import Footer from "../footer/footer";

const Print = () => {

    useEffect(() => {

    });

    return(
        <div style={{backgroundColor: 'black', height: '100vh'}}>
            <Nav print={true}/>
            Print page
            <Footer/>
        </div>
    )
};

export default Print;