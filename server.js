const express = require('express');
const {initRoutes} = require("./routes");
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
// create application/json parser

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs');

initRoutes(app);

app.listen(process.env.PORT || 8080);

console.log('Server is listening on port ' + (process.env.PORT || 8080));

module.exports = {
    app: app
}
