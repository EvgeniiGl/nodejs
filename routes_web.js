const {bookController} = require("./Controllers/BookController");
const bodyParser = require("body-parser");

const jsonParser = bodyParser.json()

function initRoutes(app) {
    app.get('/', bookController.indexAction);

    app.get('/view/:id', bookController.viewAction);

    app.get('/create/:id?', bookController.createAction);

    app.post('/save/:id?', jsonParser, bookController.saveAction);
}

module.exports = {
    routes_web: initRoutes
}
