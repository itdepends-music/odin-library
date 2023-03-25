let myLibrary = []

function Book (title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

Book.prototype.info = function () {
  const readStr = this.read ? 'has read' : 'not read yet'
  console.log(
    `${this.title} by ${this.author}, ${this.pages} pages, ${readStr}`
  )
}

/* Manually add books to test the code */
myLibrary.push(new Book('The Hobbit', 'J.R.R. Tolkien', 295, false))
myLibrary.push(new Book('The Coolest Book', 'Oscar Robertson', 300, true))

console.log(myLibrary)
