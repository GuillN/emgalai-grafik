// import ReactDOMServer from 'react-dom/server'
// import path from 'path';
// import fs from 'fs';
// import App from "./App";
// import React from "react";
// import Root from "./ServerApp";
//
// const express = require('express');
// const port = process.env.PORT || 3006;
// const app = express();
//
// app.use(express.static('../build'));
//
// app.get('/*', (req, res) => {
//     console.log(`got url: ${req.url}`)
//     const app = ReactDOMServer.renderToString(
//         <App url={req.url}/>
//     )
//     const indexFile = path.resolve('./build/index.html');
//     fs.readFile(indexFile, 'utf8', (err, data) => {
//         if (err) {
//             console.error('Something went wrong:', err);
//             return res.status(500).send('Oops, better luck next time!');
//         }
//
//         return res.send(
//             data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
//         );
//     });
//     // res.send(renderFullPage(html))
// });
//
// // const renderFullPage = html => {
// //     return `
// //         <!doctype html>
// //         <html lang="">
// //             <head>
// //                 <title>Ëmgalaï Grafik</title>
// //             </head>
// //             <body>
// //                 <div id="root">${html}</div>
// //             </body>
// //         </html>
// //     `
// // }
//
// app.listen(port, () => {
//     console.log('server started')
// });
