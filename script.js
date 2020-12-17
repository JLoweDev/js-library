let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let newBook = new Book(title, author, pages, read)

function addBookToLibrary() {
  myLibrary.push();
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("addbtn").style.display = "none";
  document.getElementById("closebtn").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("closebtn").style.display = "none";
  document.getElementById("addbtn").style.display = "block";
}