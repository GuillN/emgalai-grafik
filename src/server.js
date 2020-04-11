import ReactDOMServer from 'react-dom/server'
import App from "./App";
import React from "react";
import Root from "./ServerApp";

const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

//app.use(express.static(__dirname + "/dist/"));

app.get('*', (req, res) => {
    const html = ReactDOMServer.renderToString(
        <Root url={req.url}/>
    )
    res.send(renderFullPage(html))
});

const renderFullPage = html => {
    return `
        <!doctype html>
        <html lang="">
            <head>
                <title>Ëmgalaï Grafik</title>
            </head>
            <body>
                <div id="app">${html}</div>
            </body>
        </html>
    `
}

app.listen(port);