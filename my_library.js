class Library{
    constructor(libTitle){
        this.name = libTitle
        this.books = {};
        this.totalBooks = 0;
        this.borowedBooks = 0;

    }

    // Добавляем новую книгу
    addBook(title, author, year, isbn, quantity = 1){
        const newBook = {
            title: title,
            author: author,
            yeat: yeat,
            isbn: isbn,
            totalQuantity: quantity,
            availableQuantity: quantity,
            borrowedBy:[]
        }
        const findBook = this.filter(book => book.isbn === isbn);
        if(findBook.length){
            for (var i = 0; i <= this.books.length; i++){
                if (this.books[i] == findBook[0]) {
                    this.books[i].totalQuantity += quantity;
                    this.books[i].availableQuantity += quantity;
                }
            }
        }
         else {
                this.books.push(newBook)

            }
            return newBook;
        }
    }
    const library = new Library('Текстовая библиотека');

