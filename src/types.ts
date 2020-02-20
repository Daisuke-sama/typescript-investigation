import {Author, Book, Person} from './interfaces';

export type BookProperties = keyof Book;
export type PersonBook = Person & Book;   // union -> creation of a new type from intersection
export type BookOrUndefined = Book | undefined;  // union -> creation of a new type from intersection

export type BookRequiredFields = Required<Book>;
export type UpdatedBook = Partial<Book>;
export type AuthorWoEmail = Omit<Author, 'email'>;
export type CreateCustomerFunctionType = (name: string, age?: number, city?: string) => void;
