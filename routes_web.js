const {bookController} = require("./Controllers/BookController");
const bodyParser = require("body-parser");
const express = require("express");

const jsonParser = bodyParser.json()

function initRoutes(app) {

    const webRouter = express.Router();

    webRouter.get('/', bookController.indexAction);

    webRouter.get('/view/:id', bookController.viewAction);

    webRouter.get('/create/:id?', bookController.createAction);

    webRouter.post('/save/:id?', jsonParser, bookController.saveAction);

    app.use('/api', webRouter);
}

module.exports = {
    routes_web: initRoutes
}
