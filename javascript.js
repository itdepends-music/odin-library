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
  const previousBookCards = document.getElementById('bookCards')
  if (previousBookCards) previousBookCards.remove()

  const bookCards = document.createElement('div')
  bookCards.id = 'bookCards'

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

  document.body.insertBefore(
    bookCards,
    document.getElementById('newBookButton')
  )
}

const newBookButton = document.getElementById('newBookButton')
const newBookForm = document.getElementById('newBookForm')
const newBookSubmit = document.getElementById('newBookSubmit')

newBookButton.addEventListener('click', () =>
  newBookForm.classList.remove('hidden')
)

function addBookHandler (e) {
  e.preventDefault()

  const title = document.getElementById('title').value
  const author = document.getElementById('author').value
  const pages = Number(document.getElementById('pages').value)
  const read = document.getElementById('read').checked

  const book = new Book(title, author, pages, read)
  myLibrary.push(book)
  displayBooks()
}

newBookSubmit.addEventListener('click', addBookHandler)

/* Manually add books to test the code */
myLibrary.push(new Book('The Hobbit', 'J.R.R. Tolkien', 295, false))
myLibrary.push(new Book('The Coolest Book', 'Oscar Robertson', 300, true))

console.log(myLibrary)
displayBooks()
