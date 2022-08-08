import { Book } from './modules/methods.js';
import { Boook } from './modules/boooks.js';
import { DateTime } from './modules/luxon.js';
import {
  bookdiv, newauthor, newtitle, addbutton, pages, header, date,
} from './modules/getelement.js';

const bookuse = new Book();
if (localStorage.getItem('books') !== null) bookuse.Books = JSON.parse(localStorage.getItem('books'));

// adding books to the object book.
addbutton.addEventListener('click', () => {
  const book = new Boook(newtitle.value, newauthor.value);
  bookuse.Books.push(book);
  window.localStorage.setItem('books', JSON.stringify(bookuse.Books));
  bookuse.display();
});

// remove the books from list
bookdiv.addEventListener('click', (e) => {
  if (e.target.classList.contains('rem-btn')) {
    bookuse.removebook(e.target.id);
  }
});

// add links to navigate through page
header.addEventListener('click', (e) => {
  const link = e.target.innerText.replace(/\s/g, '');
  if (link === 'List' || link === 'Addnew' || link === 'Contact') {
    pages.forEach((page) => page.classList.remove('active'));
    document.getElementById(link).classList.add('active');
  }
});
// Use luxon to show time.
const updateDate = () => {
  const now = DateTime.now();
  date.innerText = `${now}`;
};

updateDate();
