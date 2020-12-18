let myLibrary = [
  {
    title: "The Hobbit",
    author: "J.R.R Tolkein",
    pages: "304",
    read: true
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: "218",
    read: false
  },
  {
    title: "Catch-22",
    author: "Joseph Heller",
    pages: "453",
    read: true
  }
];

function Book(title, author, pages, read) {
    this.title = myForm.title.value;
    this.author = myForm.author.value;
    this.pages = myForm.pages.value;
    this.read = myForm.read.checked;
}

let newBook

function render() {
  const table = document.getElementById("tableid");
  const tableitems = document.querySelectorAll(".tableitem");
  tableitems.forEach(tableitem => table.deleteRow(-1));
  for (let i=0; i<myLibrary.length; i++){
    renderBook(myLibrary[i]);
  }
  document.querySelectorAll(".removeBtn").forEach(item => {
    item.addEventListener("click", (e) => {
      console.log(e.target.parentElement.parentElement.id)
      myLibrary.splice(e.target.parentElement.parentElement.id, 1);
      render();
    })
  })
  document.querySelectorAll(".readBtn").forEach(item => {
    item.addEventListener("click", (e) => {
      console.log(e.target.parentElement.parentElement.id);
      console.log(myLibrary[e.target.parentElement.parentElement.id].read)
      if (myLibrary[e.target.parentElement.parentElement.id].read === true) {
        myLibrary[e.target.parentElement.parentElement.id].read = false;
        render();
      } else {
        myLibrary[e.target.parentElement.parentElement.id].read = true;
        render();
      }
    })
  })
}

function renderBook(book) {
  const table = document.getElementById("tableid");
  const row = table.insertRow(myLibrary.indexOf(book)+1);
  const titlecell = row.insertCell(0);
  const authorcell = row.insertCell(1);
  const pagescell = row.insertCell(2);
  const readcell = row.insertCell(3);
  const deletecell = row.insertCell(4);
  row.classList.add("tableitem");
  row.setAttribute("id", myLibrary.indexOf(book))
  titlecell.innerHTML = book.title;
  authorcell.innerHTML = book.author;
  pagescell.innerHTML = book.pages;
  readcell.innerHTML = `<button class="readBtn">${book.read}</button>`;
  deletecell.innerHTML = `<button class="removeBtn">X</button>`;
}

function addBookToLibrary() {
  newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
  myForm.reset();
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

render();