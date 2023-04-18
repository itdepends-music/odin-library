const myLibrary = []

class Book {
  constructor (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  }
}

function displayBooks () {
  const previousBookCards = document.getElementById('bookCards')
  if (previousBookCards) previousBookCards.remove()

  const bookCards = document.createElement('div')
  bookCards.id = 'bookCards'

  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i]

    const bookCard = document.createElement('div')
    bookCard.classList.add('book-card')
    bookCard.dataset.id = i
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

    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    deleteButton.dataset.id = i
    deleteButton.classList.add('book-delete-button')
    bookCard.appendChild(deleteButton)
  }

  document.body.insertBefore(bookCards, document.querySelector('.form-wrapper'))

  addDeleteHandlers()
}

function addDeleteHandlers () {
  const deleteButtons = document.getElementsByClassName('book-delete-button')
  Array.from(deleteButtons).forEach(deleteButton =>
    deleteButton.addEventListener('click', deleteButtonHandler)
  )
}

function deleteButtonHandler (e) {
  const index = e.target.dataset.id
  myLibrary.splice(index, 1)
  displayBooks()
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

  newBookForm.classList.add('hidden')
}
newBookSubmit.addEventListener('click', addBookHandler)

displayBooks()
