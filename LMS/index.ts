
import { Book } from "./Book";
import { Member } from './Member';
import { Library } from './Library';

const library = new Library();

const book1 = new Book(1, '2003', 'MOney tips');
const book2 = new Book(2, 'The Hobbit', 'emmanuel');
library.addBook(book1);
library.addBook(book2);

const member = new Member(1, 'Emmanuel');
library.addMember(member);

// console.log(member.borrow(book1.title));


console.log('Available Books:', library.listAvailableBooks());
