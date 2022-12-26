let library = [];

function Book (title, author) {
    this.title = title;
    this.author = author;
}

function addBookToLibrary (book) {
    library.push(book);
}