const express = require('express');
const mongoose = require("mongoose");

const {routes_web} = require("./routes_web");
const {routes_api} = require("./routes_api");

const app = express()

app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public'))
routes_web(app);
routes_api(app);

const port = process.env.PORT || 8080;

app.listen(port);

console.log('Server is listening on port ' + (port));

const dbName = process.env.DB_NAME || "mongo";

async function start() {
    try {
        const UrlDb = `mongodb://mongo:27017/${dbName}`;
        await mongoose.connect(UrlDb);

        app.listen(port, () => {
            console.log(`Server started`);
        });
    } catch (e) {
        console.log(e);
    }
}

start();


