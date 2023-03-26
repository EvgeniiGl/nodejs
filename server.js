const express = require('express');
const {routes_web} = require("./routes_web");
const {routes_api} = require("./routes_api");
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
// create application/json parser

app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs');

routes_web(app);
routes_api(app);

app.listen(process.env.PORT || 8080);

console.log('Server is listening on port ' + (process.env.PORT || 8080));

module.exports = {
    app: app
}
