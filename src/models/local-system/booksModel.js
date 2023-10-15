import data from '../../db/library.json' assert { type: 'json' };

export default class BooksModel {
    static async getAll(title, genre) {
        if(title) {
            const bookFound = data.library.find(elem => elem.book.title.toLowerCase() == title.toLowerCase());
            return bookFound;
        }
        if(genre) {
            const booksFiltered = data.library.filter(elem => elem.book.genre.toLowerCase() == genre.toLowerCase());
            return booksFiltered;
        }

        return data.library;
    }
    
    static async getByIsbn(isbn) {
        const bookFound = data.library.find(elem => elem.book.ISBN == isbn);
        return bookFound;
    }
}