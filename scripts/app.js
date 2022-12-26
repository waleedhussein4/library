// GLOBAL VARIABLES
index = 0;
let library = [];
// GLOBAL VARIABLES



// LISTENERS
document.getElementById('add').addEventListener('click', function () {
  generateBook();
});

const addRemoveListener = function(button) {
  button.addEventListener('click', function () {
    removeBook(button.id);
  });
}

const addReadListener = function(button) {
  button.addEventListener('click', function () {
    toggleRead(button);
  })
}
// LISTENERS



// FUNCTIONS
function Book (title, author) {

  this.title = title;
  this.author = author;
  this.id = index++;
  this.read = false;

}

Book.prototype.store = function () {
  library[this.id] = this;
  createBookElement(this);
  console.log(library);
};


const generateBook = function () {
  let title = prompt("Enter TITLE");
  let author = prompt("Enter AUTHOR");
  let book = new Book(title, author);
  addBookToLibrary(book);

  // book.store.call();
};

function addBookToLibrary (book) {

  library[book.id] = book;
  createBookElement(book);
  console.log(library);

};

const createBookElement = function (book) {

  const container = document.getElementsByClassName('container');

  // create book div
  const div = document.createElement('div');
  div.className = 'book';
  div.id = 'book-' + book.id;
  div.dataset.read = 'false';

  // create title paragraph
  const titleElement = document.createElement('p');
  titleElement.className = 'title';
  titleElement.innerText = book.title;

  // create author paragraph
  const authorElement = document.createElement('p');
  authorElement.className = 'author';
  authorElement.innerHTML = 'by ' + `<strong> ${book.author}`;

  // create id paragraph
  const idElement = document.createElement('p');
  idElement.className = 'id';
  idElement.innerText = 'ID: ' + book.id;

  // create remove button
  const buttonElement = document.createElement('button');
  buttonElement.id = book.id;
  buttonElement.classList.add('remove');
  buttonElement.innerText = 'Remove';
  addRemoveListener(buttonElement);

  // create read paragraph
  const readElement = document.createElement('button');
  readElement.id = book.id;
  readElement.classList.add('read');
  readElement.innerText = 'NOT READ';
  addReadListener(readElement);

  div.appendChild(titleElement);
  div.appendChild(authorElement);
  div.appendChild(idElement);
  div.appendChild(buttonElement);
  div.appendChild(readElement);

  container[0].appendChild(div);

};

const removeBook = function (id) {
  // remove the book from the library array
  library.splice(id, 1);

  // remove the book from the page
  document.querySelector('#book-'+id).remove();;

};

const toggleRead = function(button) {
  let book = library[button.id];

  if (book.read == true) {
    button.style.color = 'red';
    book.read = false;
  } else if (book.read == false) {
    button.style.color = 'green';
    book.read = true;
  }
};
// FUNCTIONS

console.log(library);