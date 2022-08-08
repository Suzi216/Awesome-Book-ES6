// var books=[];
const bookdiv = document.querySelector('.books-list');
const newtitle = document.querySelector('.book-name');
const newauthor = document.querySelector('.book-author');
const addbutton = document.getElementById('add-book');
const pages = document.querySelectorAll('.page');
const header = document.querySelector('.header');

import {Book} from 'modules/method.js';

const bookuse = new Book();
if (localStorage.getItem('books') !== null) bookuse.Books = JSON.parse(localStorage.getItem('books'));
// bookuse.display();
// adding books to the object book.
addbutton.addEventListener('click', () => {
  const book = { book: '', author: '' };
  book.book = newtitle.value;
  book.author = newauthor.value;
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

let link = 'a';
header.addEventListener('click', (e) => {
  link = e.target.innerText.replace(/\s/g, '');
  if (link === 'List' || link === 'Addnew' || link === 'Contact') {
    pages.forEach((page) => page.classList.remove('active'));
    document.getElementById(link).classList.add('active');
  }
});
