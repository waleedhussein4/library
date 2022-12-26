// GLOBAL VARIABLES
index = 0;
let library = [];
// GLOBAL VARIABLES



// LISTENERS
document.getElementById('add').addEventListener('click', function () {
  generateBook();
});

document.getElementsByClassName('remove').array.forEach(button => {
  button.addEventListener('click', function () {
    removeBook(button.id);
  });
});
// LISTENERS



// OBJECTS
function Book (title, author) {

  this.title = title;
  this.author = author;
  this.id = index++;

}
// OBJECTS



// FUNCTIONS
const generateBook = function () {
  let title = prompt("Enter TITLE");
  let author = prompt("Enter AUTHOR");
  let book = new Book(title, author);
  addBookToLibrary(book);
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
  div.dataset.id = book.id;

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
  idElement.innerText = book.id;

  // create remove button
  const buttonElement = document.createElement('button');
  buttonElement.id = book.id;
  buttonElement.classList.add('remove');
  buttonElement.innerText = 'Remove';

  div.appendChild(titleElement);
  div.appendChild(authorElement);
  div.appendChild(buttonElement);
  div.dataset.id = book.id;

  container[0].appendChild(div);

};

const removeBook = function (id) {
  // remove the book from the library array
  // remove the book from the page
};
// FUNCTIONS

console.log(library);