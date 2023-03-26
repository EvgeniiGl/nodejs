const {booksStore} = require("../../Books/store");
const {Book} = require("../../Books/Entities/Book");


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

}

module.exports = {
    bookController: new BookController()
};
