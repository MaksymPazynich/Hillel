export default class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    get title() { return this._title; }
    set title(value) {
        if (typeof value !== 'string' || value.length === 0) throw new Error("Назва має бути рядком");
        this._title = value;
    }

    get author() { return this._author; }
    set author(value) {
        if (typeof value !== 'string') throw new Error("Автор має бути рядком");
        this._author = value;
    }

    get year() { return this._year; }
    set year(value) {
        if (typeof value !== 'number' || value > new Date().getFullYear()) throw new Error("Некоректний рік");
        this._year = value;
    }

    printInfo() {
        console.log(`Назва: "${this.title}", Автор: ${this.author}, Рік: ${this.year}`);
    }

    static getOldestBook(books) {
        return books.reduce((oldest, current) => (current.year < oldest.year ? current : oldest));
    }
}