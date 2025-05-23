
import { Book } from './Book';
import { Member } from './Member';

export class Library {
  public books: Book[] = [];
  public members: Member[] = [];

  addBook(book: Book) {
    this.books.push(book);
  }

  addMember(member: Member) {
    this.members.push(member);
  }

  listAvailableBooks(): Book[] {
    return this.books.filter((book) => book.available);
  }
}
