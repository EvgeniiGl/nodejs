const bodyParser = require("body-parser");
const express = require("express");
const {userController} = require("./Controllers/Api/UserController");
const {bookController} = require("./Controllers/Api/BookController");
const multer = require('multer');
const fileUploader = require('./middleware/file')

function initRoutes(app) {

    const apiRouter = express.Router();

    apiRouter.post('/user/login', userController.login)
    apiRouter.get('/books', bookController.books)
    apiRouter.get('/book/:id', bookController.getBook)
    apiRouter.post('/book', fileUploader.single('file'), bookController.createBook)
    apiRouter.put('/book/:id', fileUploader.single('file'), bookController.updateBook)
    apiRouter.delete('/book/:id', bookController.deleteBook)
    apiRouter.get('/book/:id/download', bookController.download)

    app.use('/api', apiRouter);
}

module.exports = {
    routes_api: initRoutes
}
