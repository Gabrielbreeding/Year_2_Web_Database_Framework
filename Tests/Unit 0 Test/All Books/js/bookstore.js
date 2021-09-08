/*
Developer: Gabriel Breeding
Instructor: Jeff Scott
Project:   Unit 0 Test
Start Date: Septemer 7, 2021
End Date: September 8, 2021
*/

// Program Functions
//console.log('"Begin Script!" o7');
class BookShelf {
    constructor (){
        // instantiate books array.
        this.books = new Array();
        this.bookInfoAmount = 3;
    }

    get shelfSize() {
        // send out the length of the books array.
        return this.books.length;
    }

    get bookInfo () {
        const output = new Array();
        for (let i = 0; i <= this.books.length; i++){
            for (let j = 0; j <= this.bookInfoAmount; j++){
                console.log(this.books[i][j]);
                output.push(new Array (this.books[i][j])); // will go through all books and their info. once all info of a book is 
                // collected, add it to output and continue until all books information had been dumped into output.
            }
        }
        // send output
        return output;
    }
    // add a book to the books array
    addBook(book){this.books.push(book);};
    // delete the book with a matching isbn.
    deleteBook(isbn){this.books.pop(this.books.findIndex(function (book) {return book.getIsbn === isbn}))}
};
class Book {
    // constructor
    constructor (title, author, isbn, price) {
        // instantiate book info
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.price = price;
    }

};


const $ = id => document.getElementById(id);
const book = new Book ("title", "author", "isbn", "price");
const bookshelf = new BookShelf;


// set up global constants
const MIN_PRICE = 0.0;
const MAX_PRICE = 49.99;

// set up empty global constants 
let title = null;
let author = null;
let isbn = null;
let price = null;


function getFormInfo () {
    title = $("title-text").value;
    author = $("author-text").value;
    isbn = $("isbn-text").value;
    price = $("price-text").value;
}

function createBook (){
    book.title = title;
    book.author = author;
    book.isbn = isbn;
    book.price = price;
}

function addToShelf () {bookshelf.addBook(book);};

function validateBook () {
    return (validateExists(title) && validateExists(author) && validateExists(isbn) && validatePrice(price))
}

function validateExists (element) {
    if (element === "") {
        return false;// nonexistent
    }
    else{
        return true;// exists
    }
}

function validatePrice (element) {
    if (validateExists(element)){
        const price = parseFloat(element) // convert string to float.
        return (price >= MIN_PRICE && price <= MAX_PRICE) // if float is between min and max price, return true.
    }
    else {
        return false;
    }
    
}

function updateShelfView(){
    let selectedBook = null;
    let bookTitle = "";
    let bookAuthor = "";
    let bookIsbn = "";
    let bookPrice = "";
    for (let i = 0; i < bookshelf.shelfSize; i++) {
        selectedBook = bookshelf.bookInfo; // go to bookshelf and grab book 'i' and get it's information.
        bookTitle = selectedBook[i][0];
        bookAuthor = selectedBook[i][1];// gather book info in an understandable way.
        bookIsbn = selectedBook[i][2];
        bookPrice = selectedBook[i][3];

        $("books").innerHTML += 
                            `
                            <div class="book">
                                <p class="db-title">${bookTitle}</p>
                                <p class="db-author">${bookAuthor}</p>
                                <p class="db-isbn">${bookIsbn}</p>
                                <p class="db-price">${bookPrice}</p>
                            </div>
                            `
                                
    }
}

const main = () => function () {
    //console.log("clicked");
    getFormInfo();
    //console.log("getting info");// get information from the form and store them as constants.
    if (validateBook()){
        //console.log("validated");// validate the information from the form.
        createBook();
        //console.log("created");// load the book with validated information.
        addToShelf();
        //console.log("added to shelf");// add book to the shelf.
        updateShelfView();
        //console.log("updated view");// update the user-side shelf view.
    }
}

window.onload = function () {
    // gives event listeners connecting the clear and save buttons to their respective functions via click.
    $("button-submit").addEventListener("click", main());
    //console.log('"Window Loaded!" o7')
    
}