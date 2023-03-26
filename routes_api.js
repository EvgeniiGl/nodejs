const bodyParser = require("body-parser");
const express = require("express");
const {userController} = require("./Controllers/Api/UserController");
const {bookController} = require("./Controllers/Api/BookController");

const jsonParser = bodyParser.json()

function initRoutes(app) {

    const apiRouter = express.Router();

    apiRouter.post('/user/login', userController.login)
    apiRouter.get('/books', bookController.books)
    apiRouter.get('/book/:id', bookController.getBook)
    apiRouter.post('/book', jsonParser, bookController.createBook)
    apiRouter.put('/book/:id', jsonParser, bookController.updateBook)
    apiRouter.delete('/book/:id', jsonParser, bookController.deleteBook)

    app.use('/api', apiRouter);
}

module.exports = {
    routes_api: initRoutes
}
