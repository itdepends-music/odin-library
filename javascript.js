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
