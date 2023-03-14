class Book {
    #id
    #title
    #body

    constructor(id, title, body) {
        this._id = id;
        this._title = title;
        this._body = body;
    }

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    get body() {
        return this._body;
    }
}

module.exports = {
    Book
}
