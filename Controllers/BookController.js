const {booksStore} = require("../Books/store");
const {Book} = require("../Books/Entities/Book");

class BookController {
    indexAction = function (req, res) {
        const books = booksStore.map(book => new Book(book.id, book.title, book.body))

        res.render('index', {books: books});
    }

    viewAction = function (req, res) {
        const id = Number(req.params.id)
        const bookStore = booksStore.filter(book => book.id === id)
        if (bookStore.length < 1) {
            throw new Error('Нет такой книги');
        }
        const book = new Book(bookStore[0].id, bookStore[0].title, bookStore[0].body);

        res.render('view', {book: book});
    }

    createAction = function (req, res) {
        const id = Number(req.params.id)

        res.render('form', {id});
    }

    saveAction = function (req, res) {
        const id = Number(req.params.id)
        const {title, body} = req.body

        if (id) {
            booksStore.forEach((book) => {
                if (id === book.id) {
                    book.title = title;
                    book.body = body;
                }
            })
        } else {
            booksStore.push({
                id: Date.now(),
                title,
                body
            })
        }
        res.redirect("/");
    }
}

module.exports = {
    bookController: new BookController()
};
