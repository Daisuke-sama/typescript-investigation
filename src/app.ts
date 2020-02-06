showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// ========================================================================

enum Category {Javascript, CSS, HTML, TypeScript, Angular}

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
}

function getAllBooks(): readonly Book[] {
    const books: readonly Book[] = <const>[
        {id: 1, title: 'Refactoring JavaScript', category: Category.Javascript, author: 'Evan Burchard', available: true},
        {id: 2, title: 'JavaScript Testing', category: Category.Javascript, author: 'Liang Yuxian Eugene', available: false},
        {id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: true},
        {id: 4, title: 'Mastering JavaScript Object-Oriented Programming', category: Category.Javascript, author: 'Andrea Chiarelli', available: true}
    ];

    return books;
}

function logFirstAvailable(books: readonly object[] = getAllBooks()): void {
    const booksCount: number = books.length;
    let title: string = '';

    for (const book of books) {
        if (book['available']) {
            title = book['title'];
            break;
        }
    }

    console.log(`Total number of books is ${booksCount}`);
    console.log(`First available book is ${title}`)
}

function getBookTitlesByCategory(category: Category = Category.Javascript): Array<string> {
    const books = getAllBooks();
    const titles = [] as string[];

    for (const book of books) {
        if ((<any>book).category === category) {
            titles.push(book['title']);
        }
    }

    return titles;
}

function logBookTitles(titles: string[]): void {
    titles.forEach((title: string) => console.log(title));
}

function getBookAuthorByIndex(index: number): [string, string] {
    const books = getAllBooks();
    const {title, author} = books[index] as any;

    return [title, author];
}

function calcTotalPages(): bigint {
    const data = <const>[
        {lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250},
        {lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300},
        {lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280}
    ];

    return data.reduce((acc: bigint, obj: any) => {
        return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
    }, BigInt(0));
}

function getBookByID(id: number): Book | undefined {
    const books = getAllBooks();
    return books.find(book => book['id'] === id);
}

function createCustomerID(name: string, id: number): string {
    return `${name}${id}`;
}

function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Creating customer ${name}`);

    if (age) {
        console.log(`Age: ${age}`);
    }

    if (city) {
        console.log(`City: ${city}`);
    }
}

function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`checking out books for ${customer}`);

    const titles: string[] = [];

    for (const id of bookIDs) {
        const book: any = getBookByID(id);
        if (book && book.available) {
            titles.push(book.title);
        }
    }

    return titles;
}


function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(id: number, available: boolean): string[];
function getTitles(...args: any[]): string[] {
    const books: ReadonlyArray<any> = getAllBooks();

    if (args.length === 1) {
        const [arg] = args;

        if (typeof arg === 'string') {
            return books.filter(book => book.author === arg).map(book => book.title);
        } else if (typeof arg === 'boolean') {
            return books.filter(book => book.available === arg).map(book => book.title);
        }
    } else if (args.length === 2) {
        const [id, available] = args;

        if (typeof id === "number" && typeof available === "boolean") {
            return books.filter(book => book.id === id && book.available === available).map(book => book.title);
        }
    }
}


function assertStringValue(val: any): asserts val is string {
    if (typeof val !== 'string') {
        throw new Error('value should be a string');
    }
}

function bookTitleTransform(title: any): string {
    assertStringValue(title);

    return title.split('').reverse().join('');
}

function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

class ReferenceItem {
    title: string;
    year: number;
    private _publisher: string;
    static department: string = 'Research Dep';

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher) {
        this._publisher = newPublisher;
    }

    constructor(public newTitle: string, private newYear: number) {
        console.log('Creating a new ReferenceItem...');
        this.title = newTitle;
        this.year = newYear;
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department: ${ReferenceItem.department}`);
    }
}

class Encyclopedia extends ReferenceItem {
    constructor(newTitle: string, newYear: number, public edition: number) {
        super(newTitle, newYear);
    }

    printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }
}


// todo task 05.02
const refBook = new Encyclopedia('Hi, TS', 2020, 1);
refBook.printItem();
console.log(refBook);


// todo Task 05.01
const ref = new ReferenceItem('Hello, Typescript', 2020);
ref.printItem();
ref.publisher = 'Random Publisher';
console.log(ref);
console.log(ref.publisher);


// todo Task 04.01

printBook(getBookByID(1));

// todo Task 03.05

// const title1 = bookTitleTransform('Title');
// console.log(title1);
// // const title2 = bookTitleTransform(132);
// console.log(title2);

// todo Task 03.04

// const checkedOutBooks = getTitles(1,false);
// console.log(checkedOutBooks);

// todo Task 03.03

// createCustomer('Tatiana');
// createCustomer('Tatiana', 30);
// createCustomer('Tatiana', 15, 'Minsk');
// const books = getBookTitlesByCategory();
// console.log(books);

// logFirstAvailable();

// const myBooks = checkoutBooks('Ann', 1, 2, 4);
// console.log(myBooks);


// todo Task 03.02

// let myID = createCustomerID('Ann', 10);
// console.log(myID);
//
// let idGenerator: (name: string, id: number) => string;
// idGenerator = createCustomerID;
// myID = idGenerator('Eva', 20);
// console.log(myID);
//
// idGenerator = (name: string, id: number) => `${id}${name}`;
// myID = idGenerator('Daria', 30);
// console.log(myID);


// todo Task 03.01

// const titles = getBookTitlesByCategory(Category.Javascript);
// titles.forEach(title => console.log(title));

// const book = getBookByID(1);
// console.log(book);


// todo Task 02.01

//logFirstAvailable(getAllBooks());

// const titles = getBookTitlesByCategory(Category.Javascript);
// logBookTitles(titles);

// const book = getBookAuthorByIndex(3);
// console.log(book);

// console.log(calcTotalPages());
