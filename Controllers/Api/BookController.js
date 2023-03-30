const {booksStore} = require("../../Books/store");
const fs = require('fs');
const {dirname} = require('path');

class BookController {

    books = function (req, res) {
        const books = booksStore

        res.json(books)
    }

    getBook = function (req, res) {

        const id = req.params.id
        const bookStore = booksStore.filter(book => book.id === id)

        res.json(bookStore[0])
    }

    createBook = function (req, res) {
        const newBook = {
            ...req.body,
            id: String(Date.now())
        }

        if (req.file) {
            newBook.fileName = req.file.path
        }

        booksStore.push(newBook)

        const books = booksStore

        res.json(books)
    }

    updateBook = function (req, res) {
        const id = req.params.id
        if (!id) {
            throw new Error('Ошибка');
        }
        const index = booksStore.findIndex(book => book.id === id)
        if (index === -1) {
            throw new Error('Ошибка');
        }
        const newBook = {
            ...req.body,
            id: id
        }
        if (req.file) {
            newBook.fileName = req.file.path
        }
        booksStore[index] = {
            ...req.body,
            id: id
        }

        res.json(booksStore)
    }

    deleteBook = function (req, res) {
        const id = req.params.id
        if (!id) {
            throw new Error('Ошибка');
        }
        const index = booksStore.findIndex(book => book.id === id)
        if (index === -1) {
            throw new Error('Ошибка');
        }
        booksStore.splice(index, 1)
        res.json(booksStore)

    }

    download = function (req, res) {
        const id = req.params.id
        if (!id) {
            res.status(422)
            res.json({error: 'Не передан ид книги'})
        }
        const index = booksStore.findIndex(book => book.id === id)
        if (index === -1 || !booksStore[index].fileName) {
            res.status(404)
            res.json({error: 'Книга не найдена'})
        }

        const path = dirname(require.main.filename) + '/public/my-uploads/' + booksStore[index].fileName;
        const file = fs.createReadStream(path)
        const filename = booksStore[index].fileName
        res.setHeader('Content-Disposition', 'attachment: filename="' + filename + '"')
        file.pipe(res)
    }
}

module.exports = {
    bookController: new BookController()
};
