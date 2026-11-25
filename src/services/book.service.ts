

import type { Book } from "../models/book.model.js";
import { prisma } from "../lib/prisma.js";

type DatabaseBook = {
  id: number;
  title: string;
  author: string;
  genre: string;
  available: boolean;
  createdAt: Date;
  updatedAt: Date;
};

const formatBook = (book: DatabaseBook): Book => ({
  ...book,
  createdAt: book.createdAt.toISOString(),
  updatedAt: book.updatedAt.toISOString(),
});

export const getAllBooks = async (): Promise<Book[]> => {
  const books = await prisma.book.findMany();

  return books.map(formatBook);
};

export const getBookById = async (
  id: number,
): Promise<Book | undefined> => {
  const book = await prisma.book.findUnique({
    where: { id },
  });

  return book ? formatBook(book) : undefined;
};

export const createBook = async (
  data: Omit<Book, "id" | "createdAt" | "updatedAt">,
): Promise<Book> => {
  const newBook = await prisma.book.create({
    data,
  });

  return formatBook(newBook);
};

export const updateBook = async (
  id: number,
  data: Partial<Omit<Book, "id" | "createdAt" | "updatedAt">>,
): Promise<Book | undefined> => {
  const existingBook = await prisma.book.findUnique({
    where: { id },
  });

  if (!existingBook) {
    return undefined;
  }

  const updatedBook = await prisma.book.update({
    where: { id },
    data,
  });

  return formatBook(updatedBook);
};

export const deleteBook = async (id: number): Promise<boolean> => {
  const result = await prisma.book.deleteMany({
    where: { id },
  });

  return result.count > 0;
};
