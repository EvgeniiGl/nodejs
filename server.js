const express = require('express');
const {routes_web} = require("./routes_web");
const {routes_api} = require("./routes_api");

const app = express()

app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public'))
routes_web(app);
routes_api(app);

app.listen(process.env.PORT || 8080);

console.log('Server is listening on port ' + (process.env.PORT || 8080));

module.exports = {
    app: app
}
