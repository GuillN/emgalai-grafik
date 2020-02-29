import React from "react"
import Nav from "../nav/nav";
import Footer from "../footer/footer";

class Print extends React.Component {
    render() {
        return(
            <div style={{backgroundColor: 'black', height: '100vh'}}>
                <Nav print={true}/>
                Print page
                <Footer/>
            </div>
        )
    }
}

export default Print;