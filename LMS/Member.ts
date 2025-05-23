import { Book } from "./Book";

export class Member {
  public borrowedBooks: Book[] = [];

  constructor(public id: number, public name: string) {}

  borrow(book: Book): string {
    if (book.available) {
      book.available = false;
      this.borrowedBooks.push(book);
      return `${this.name} borrowed "${book.title}"`;
    }
    return `"${book.title}" is not available`;
  }

  returnBook(bookId: number): string {
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
