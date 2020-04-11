let React = require("react")
let About = React.createFactory(require("../components/about/about"))

module.exports = app => {
    app.get('/about', (req, res) => {
        let reactHTML = React.renderToString(About({}))
        res.render('about.ejs', {reactOutput: reactHTML})
    })
}