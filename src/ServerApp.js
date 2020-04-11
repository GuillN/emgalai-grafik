import {StaticRouter} from 'react-router';
import Routes from "./Routes";
import React from 'react'

export default props => {
    return (
        <StaticRouter location={props.url}>
            <Routes/>
        </StaticRouter>
    )
}