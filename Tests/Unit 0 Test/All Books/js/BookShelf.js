/*
Developer: Gabriel Breeding
Instructor: Jeff Scott
Project:   Unit 0 Test
Start Date: Septemer 7, 2021
End Date: September 8, 2021
*/
/*
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
        for (const i = 0; i < this.books.length; i++){
            for (const j = 0; j < this.bookInfoAmount; j++){
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
*/