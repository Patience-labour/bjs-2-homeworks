class PrintEditionItem {
    #state
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.#state = 100;
        this.type = null;
    }

    fix() {
        this.state *=1.5;
    }

    set state(newState) {
        if(newState < 0) {
            this.#state = 0;
        } else if (newState > 100) {
            this.#state = 100;
        } else {
            this.#state = newState;
        }
    }
    get state() {
        return this.#state;
    }
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pageCount) {
        super(name, releaseDate, pageCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor (author,name,releaseDate,pageCount) {
        super(name, releaseDate, pageCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor (author,name, releaseDate, pageCount) {
        super(author, name, releaseDate, pageCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor (author,name, releaseDate, pageCount) {
        super(author,name, releaseDate, pageCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pageCount) {
        super(author, name, releaseDate, pageCount);
        this.type = 'detective';
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook (book) {
        if(book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy (type, value) {
        for(let i = 0; i<this.books.length; i++) {
            if(this.books[i][type] === value) {
                return this.books[i]
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        for(let i = 0; i<this.books.length; i++) {
            if(this.books[i].name === bookName) {
                let newBook = this.books[i];
                this.books.splice(i, 1);
                return newBook;
            }
        }
        return null;
    }
}