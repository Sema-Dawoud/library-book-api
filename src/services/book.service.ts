
import type { Book } from "../models/book.model.js";

let books: Book[] = [
  {
    id: 1,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    available: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-help",
    available: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

let nextId = 3;

export const getAllBooks = (): Book[] => {
  return books;
};

export const getBookById = (id: number): Book | undefined => {
  return books.find((book) => book.id === id);
};

export const createBook = (data: Omit<Book, "id" | "createdAt" | "updatedAt">): Book => {
  const now = new Date().toISOString();

  const newBook: Book = {
    id: nextId++,
    ...data,
    createdAt: now,
    updatedAt: now,
  };

  books.push(newBook);
  return newBook;
};

export const updateBook = (
  id: number,
  data: Partial<Omit<Book, "id" | "createdAt" | "updatedAt">>,
): Book | undefined => {
  const book = books.find((book) => book.id === id);

  if (!book) {
    return undefined;
  }

  Object.assign(book, data, {
    updatedAt: new Date().toISOString(),
  });

  return book;
};

export const deleteBook = (id: number): boolean => {
  const index = books.findIndex((book) => book.id === id);

  if (index === -1) {
    return false;
  }

  books.splice(index, 1);
  return true;
};