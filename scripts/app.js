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
  // createBookElement(this);
  this.createElement();
  console.log(library);
};

Book.prototype.createElement = function () {

  const container = document.getElementsByClassName('container');

  // create book div
  const div = document.createElement('div');
  div.className = 'book';
  div.id = 'book-' + this.id;
  div.dataset.read = 'false';

  // create title paragraph
  const titleElement = document.createElement('p');
  titleElement.className = 'title';
  titleElement.innerText = this.title;

  // create author paragraph
  const authorElement = document.createElement('p');
  authorElement.className = 'author';
  authorElement.innerHTML = 'by ' + `<strong> ${this.author}`;

  // create id paragraph
  const idElement = document.createElement('p');
  idElement.className = 'id';
  idElement.innerText = 'ID: ' + this.id;

  // create remove button
  const buttonElement = document.createElement('button');
  buttonElement.id = this.id;
  buttonElement.classList.add('remove');
  buttonElement.innerText = 'Remove';
  addRemoveListener(buttonElement);

  // create read paragraph
  const readElement = document.createElement('button');
  readElement.id = this.id;
  readElement.classList.add('read');
  readElement.innerText = 'NOT READ';
  readElement.style.backgroundColor = '#ff9c9c';
  addReadListener(readElement);

  div.appendChild(titleElement);
  div.appendChild(authorElement);
  div.appendChild(idElement);
  div.appendChild(buttonElement);
  div.appendChild(readElement);

  container[0].appendChild(div);

};

const generateBook = function () {
  let title = prompt("Enter TITLE");
  let author = prompt("Enter AUTHOR");
  let book = new Book(title, author);

  book.store();
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
    button.style.backgroundColor = '#ff9c9c';
    button.innerText = 'NOT READ';
    book.read = false;
  } else if (book.read == false) {
    button.style.backgroundColor = 'lightgreen';
    button.innerText = 'READ'
    book.read = true;
  }
};
// FUNCTIONS