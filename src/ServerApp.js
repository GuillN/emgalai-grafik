import {StaticRouter} from 'react-router';
import Routes from "./Routes";
import React from 'react'

export default function Root(props) {
    return (
        <StaticRouter location={props.url}>
            <Routes/>
        </StaticRouter>
    )
}