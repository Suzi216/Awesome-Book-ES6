export const bookdiv = document.querySelector('.books-list');
export class Book {
  constructor() {
    this.Books = [];
   }

  /// display the books in html page
  display() {
    bookdiv.innerHTML = '';
    for (let i = 0; i < this.Books.length; i += 1) {
      const listofbook = document.createElement('div');
      listofbook.classList.add('book');
      if (i % 2 === 0) {
        listofbook.classList.add('bg-danger');
      } else {
        listofbook.classList.add('bg-light');
      }
      listofbook.innerHTML = `<p>"${this.Books[i].book}" by
            ${this.Books[i].author}</p>
            <button id=${i} class="rem-btn" >Remove</button><br> <br>`;
      bookdiv.appendChild(listofbook);
    }
  }

  // remove the books
  removebook(id) {
    this.Books.splice(id, 1);
    window.localStorage.setItem('books', JSON.stringify(this.Books));
    this.display();
  }
}
