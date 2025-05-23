"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    addMember(member) {
        this.members.push(member);
    }
    listAvailableBooks() {
        return this.books.filter((book) => book.available);
    }
}
exports.Library = Library;
