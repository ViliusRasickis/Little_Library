let myLibrary = [];

const Book = (title, author, pages, read) => {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  return myLibrary.push({ title, author, pages, read });
};

const addBookToLibrary = () => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;
  const bookForm = document.getElementById("bookForm");
  Book(title, author, pages, read);
};

const header = document.getElementById("headTitle");
const submit = document.getElementById("submitButton");
const currentLibrary = document.getElementById("currentLibrary");
const addBookButton = document.getElementById("addBook");
const modal_container = document.getElementById("modal-container");
const closeButton = document.getElementById("close");

submit.addEventListener("click", function (e) {
  addBookToLibrary();
  header.style.margin = "0 0 80vh";
  currentLibrary.style.margin = "0 10px 50vh";
  addBookButton.style.margin = "0 10px 50vh";
  bookForm.reset();
  e.preventDefault();
});

addBookButton.addEventListener("click", () => {
  modal_container.classList.add("show");
});

closeButton.addEventListener("click", () => {
  modal_container.classList.remove("show");
});
