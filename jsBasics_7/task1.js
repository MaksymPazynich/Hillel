import Book from './Book.js';
import EBook from './EBook.js';

const book1 = new Book("Kobzar", "Taras Shevchenko", 1840);
const book2 = new Book("1984", "George Orwell", 1949);
const book3 = new Book("The Witcher", "Andrzej Sapkowski", 1990);

book1.printInfo();
book2.printInfo();

const ebook1 = new EBook("Clean Code", "Robert Martin", 2008, "PDF");
ebook1.printInfo();

const allBooks = [book1, book2, book3, ebook1];
const oldest = Book.getOldestBook(allBooks);
console.log("\nНайдавніша книга:");
oldest.printInfo();

const convertedEbook = EBook.fromBook(book2, "EPUB");
console.log("\nКонвертована книга:");
convertedEbook.printInfo();