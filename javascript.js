const myLibrary = []

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

function displayBooks () {
  const bookCards = document.createElement('div')
  bookCards.classList.add('book-cards')

  for (const book of myLibrary) {
    const bookCard = document.createElement('div')
    bookCard.classList.add('book-card')
    bookCards.appendChild(bookCard)

    const titleElem = document.createElement('h3')
    titleElem.textContent = book.title
    bookCard.appendChild(titleElem)

    const authorElem = document.createElement('p')
    authorElem.textContent = `Author: ${book.author}`
    bookCard.appendChild(authorElem)

    const pagesElem = document.createElement('p')
    pagesElem.textContent = `Pages: ${book.pages}`
    bookCard.appendChild(pagesElem)

    const readElem = document.createElement('p')
    readElem.textContent = book.read ? 'Read' : 'Not Read'
    bookCard.appendChild(readElem)
  }

  document.body.appendChild(bookCards)
}

/* Manually add books to test the code */
myLibrary.push(new Book('The Hobbit', 'J.R.R. Tolkien', 295, false))
myLibrary.push(new Book('The Coolest Book', 'Oscar Robertson', 300, true))

console.log(myLibrary)
displayBooks()
