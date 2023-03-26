class Book {
    #id
    #title
    #description
    #authors
    #favorite
    #fileCover
    #fileName

    constructor(book) {
        this._id = book.id;
        this._title = book.title;
        this._description = book.description;
        this._authors = book.authors;
        this._favorite = book.favorite;
        this._fileCover = book.fileCover;
        this._fileName = book.fileName;
    }

    get id() {
        return this.#id;
    }

    get title() {
        return this.#title;
    }

    get description() {
        return this.#description;
    }

    get authors() {
        return this.#authors;
    }

    get favorite() {
        return this.#favorite;
    }

    get fileCover() {
        return this.#fileCover;
    }

    get fileName() {
        return this.#fileName;
    }
}

module.exports = {
    Book
}
