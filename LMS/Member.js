"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
class Member {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.borrowedBooks = [];
    }
    borrow(book) {
        if (book.available) {
            book.available = false;
            this.borrowedBooks.push(book);
            return `${this.name} borrowed "${book.title}"`;
        }
        return `"${book.title}" is not available`;
    }
    returnBook(bookId) {
        const index = this.borrowedBooks.findIndex((b) => b.id === bookId);
        if (index !== -1) {
            const book = this.borrowedBooks[index];
            book.available = true;
            this.borrowedBooks.splice(index, 1);
            return `${this.name} returned "${book.title}"`;
        }
        return `Book not found in borrowed list.`;
    }
}
exports.Member = Member;
