import {Book, Person} from './interfaces';

export type BookProperties = keyof Book;
export type PersonBook = Person & Book;   // union -> creation of a new type from intersection
export type BookOrUndefined = Book | undefined;  // union -> creation of a new type from intersection
