import {BookRequiredFields, CreateCustomerFunctionType, UpdatedBook} from "./types";
import {Category} from "./enums";
import {createCustomer} from "./functions";
import {UniversityLibrarian} from "./classes";

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// ========================================================================


// todo Task 08.02
const universityLibrarian = new UniversityLibrarian();
console.log(universityLibrarian);
universityLibrarian.name = 'Kate';
universityLibrarian['printLibrarian']();


// todo 07.05
// const params: Parameters<CreateCustomerFunctionType> = ['Ann', 30];
// createCustomer(...params);


// todo 07.04
// const book: BookRequiredFields = {
//     id: 1,
//     author: 'Vasilii',
//     available: false,
//     category: Category.HTML,
//     title: 'Ok Title',
//     pages: 200,
//     markDamaged: null
// };
//
// const updatedBook: UpdatedBook = {
//     id: 2,
//     title: 'Go with it',
// };

// todo 07.03

// const magazines: Array<Magazine> = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];
// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
//
// magazineShelf.printTitle();


// todo Task 07.02
// const inventory: Array<Book> = [
//     { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ];
// const bookShelf = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// const firstBook = bookShelf.getFirst();
// console.log(firstBook);
//
// const magazines: Array<Magazine> = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];
// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// const firstMag = magazineShelf.getFirst();
// console.log(firstMag.title);


// todo Task 07.01
// let result = purge<Book>(inventory);
// console.log(result);
//
// const result2 = purge([1,2,3,4,5]);
// console.log(result2);


// todo Task 06.05
// import('./classes').then(module => {
//     const reader = new module.Reader();
//     reader.name = 'Kate';
//     reader.take(getAllBooks()[2]);
//
//     console.log(reader);
// });


// todo Task 05.05
// const personBook: PersonBook = {
//     name: 'Raman',
//     email: 'raman@abc.com',
//     id: 12,
//     title: 'Good to know',
//     author: 'Paul B.',
//     available: true,
//     category: Category.Javascript,
// };
// console.log(personBook);


// todo task 05.04
// const favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Jim';
// favoriteLibrarian.assistCustomer('Paul');


// todo task 05.03
// const enc = new Encyclopedia('Title', 2030, 1);
// enc.printCitation();


// todo task 05.02
// const refBook = new Encyclopedia('Hi, TS', 2020, 1);
// const refBook = new RefBook('Hi, TS', 2020, 1);
// refBook.printItem();
// console.log(refBook);


// todo Task 05.01
// const ref = new ReferenceItem('Hello, Typescript', 2020);
// ref.printItem();
// ref.publisher = 'Random Publisher';
// console.log(ref);
// console.log(ref.publisher);


// todo Task 04.05
// console.log(getBookProp(getAllBooks()[0], 'title'));
// console.log(getBookProp(getAllBooks()[0], 'markDamaged'));
// // console.log(getBookProp(getAllBooks()[0], 'abc'));


// todo Task 04.04
// const offer: any = {
//     book: {
//         title: 'Essential TypeScript'
//     }
// };
// console.log(offer.book?.magazine);


// todo Task 04.03
// const favouriteAuthor: Author = {
//     name: 'Ann',
//     email: 'add@sdgf.fd',
//     numBooksPublished: 10,
// };
//
// const favouriteLibrarian: Librarian = {
//     name: 'Boris',
//     email: 'boris@dep.com',
//     department: 'Classical Literature',
//     assistCustomer(name: string) {
//         console.log(`Assist: ${name}`);
//     }
// };

// todo Task 04.02
// const logDamage: Logger = (reason: string) => console.log(`Damaged: ${reason}`);
// logDamage('missing back cover');

// todo Task 04.01
// const myBook: Book = {
//     id: 5,
//     title: 'Color, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     pages: 200,
//     markDamaged: (reason:string) => console.log(`Damaged: ${reason}`)
// };
// printBook(myBook);
// myBook.markDamaged('missing back cover');

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
