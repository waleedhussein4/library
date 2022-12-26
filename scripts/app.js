let library = [];

function Book (title, author) {

  this.title = title;
  this.author = author;

}

function addBookToLibrary (book) {

  library.push(book);

}

const addBooks = function () {

  library.forEach((book) => {

    createBookElement(book);

  });

};

const createBookElement = function (book) {

  const container = document.getElementsByClassName('container');

  // create book div
  const div = document.createElement('div');
  div.className = 'book';

  // create title paragraph
  const titleElement = document.createElement('p');
  titleElement.className = 'title';
  titleElement.innerText = book.title;

  // create author paragraph
  const authorElement = document.createElement('p');
  authorElement.className = 'author';
  authorElement.innerText = book.author;

  div.appendChild(titleElement);
  div.appendChild(authorElement);

  container[0].appendChild(div);

};

for (let i = 0; i < 3; i++) {

  let newbook = new Book(prompt("Enter title"), prompt("Enter author"));
  library.push(newbook);

}

addBooks();

