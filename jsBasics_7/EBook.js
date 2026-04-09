import Book from './Book.js';

export default class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this.fileFormat = fileFormat;
    }

    get fileFormat() { return this._fileFormat; }
    set fileFormat(value) {
        const validFormats = ['PDF', 'EPUB', 'MOBI'];
        if (!validFormats.includes(value.toUpperCase())) throw new Error("Некоректний формат файлу");
        this._fileFormat = value;
    }

    printInfo() {
        console.log(`Назва: "${this.title}", Автор: ${this.author}, Рік: ${this.year}, Формат: ${this.fileFormat}`);
    }

    static fromBook(bookInstance, fileFormat) {
        return new EBook(bookInstance.title, bookInstance.author, bookInstance.year, fileFormat);
    }
}