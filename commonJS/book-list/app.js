// Book Class
class Book {
    constructor(title, author, publi, isbn) {
        this.title = title;
        this.author = author;
        this.publi = publi;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book) {
        // Retrieve book list
        const list = document.getElementById('book-list');
        // Create tr
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.publi}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td>
        `;

        // Append child
        list.appendChild(row);
    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('editor').value = '';
        document.getElementById('isbn').value = '';
    }

    removeBook(target) {
        if(target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    showAlert(message, className) {
        // Create div
        const div = document.createElement('div');
        // Add Class
        div.className = `alert ${className}`;
        // Create text node
        div.appendChild(document.createTextNode(message));
        // Get Parent
        const parent = document.querySelector('.parent');
        // Get Form
        const form = document.querySelector('#book-form');
        // Insert Before
        parent.insertBefore(div, form);

        // Set timeout
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

class Store {
    static getBooks() {
        let books;
        if(localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static addBook(book) {
        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }

    static displayBooks() {
        const books = Store.getBooks();

        books.forEach(function(book) {
            const ui = new UI;

            // Add Book 
            ui.addBookToList(book);
        });
    }

    static removeBook(isbn) {
        const books = Store.getBooks();

        books.forEach(function(book, index) {
            if(book.isbn === isbn) {
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}

// Dom Content Loaded
document.addEventListener('DOMContentLoaded', Store.displayBooks);

// Event Listener - "Submit"
document.getElementById('book-form').addEventListener('submit', function(e) {

   const title = document.getElementById('title').value,
         author = document.getElementById('author').value,
         editor = document.getElementById('editor').value,
         isbn = document.getElementById('isbn').value;

    // Instantiate Book
    const book = new Book(title, author, editor, isbn);

    // Instantiate UI
    const ui = new UI;

    if(title === '' || author === '' || editor === '' || isbn === '') {
        // Show Alert
        ui.showAlert('Todos os campos são necessários!', 'error');
    } else {
        // Add Book To List
        ui.addBookToList(book);

        // Add Books To LS
        Store.addBook(book);
    
        // Clear Fields
        ui.clearFields();

        // Show Alert
        ui.showAlert('Livro Adicionado!', 'success');
    }

    e.preventDefault();
});

// Remove Book Event
document.getElementById('book-list').addEventListener('click', function(e) {
    const ui = new UI;

    // Remove Book
    ui.removeBook(e.target);

    // Show Alert
    ui.showAlert('Livro Removido!', 'success');

    // Remove Fom LS
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
});