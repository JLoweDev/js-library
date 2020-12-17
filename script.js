let myLibrary = [];

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
}

function renderBook(book) {
  const table = document.getElementById("tableid");
  const row = table.insertRow(myLibrary.indexOf(book)+1);
  const titlecell = row.insertCell(0);
  const authorcell = row.insertCell(1);
  const pagescell = row.insertCell(2);
  const readcell = row.insertCell(3);
  const deletecell = row.insertCell(4);


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