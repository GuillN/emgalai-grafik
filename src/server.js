const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

app.get('/.well-known/acme-challenge/R1NOM0NtWJaifbP1p6Oa8kwVk51Tw2SIB3vHOHqP1yY', (req, res) => {
    res.send('R1NOM0NtWJaifbP1p6Oa8kwVk51Tw2SIB3vHOHqP1yY.XIay5Anq4PXhZyAuefAOgPTNhNP_-9CrTS792hsywMQ')
});
app.listen(port);

console.log("Server started ...");