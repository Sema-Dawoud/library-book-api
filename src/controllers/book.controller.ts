
import type { Request, Response } from "express";
import * as bookService from "../services/book.service.js";

export const getAllBooks = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  const books = await bookService.getAllBooks();

  res.status(200).json(books);
};

export const getBookById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ message: "Invalid book ID" });
    return;
  }

  const book = await bookService.getBookById(id);

  if (!book) {
    res.status(404).json({ message: "Book not found" });
    return;
  }

  res.status(200).json(book);
};

export const createBook = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const book = await bookService.createBook(req.body);

  res.status(201).json(book);
};

export const updateBook = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ message: "Invalid book ID" });
    return;
  }

  const updatedBook = await bookService.updateBook(id, req.body);

  if (!updatedBook) {
    res.status(404).json({ message: "Book not found" });
    return;
  }

  res.status(200).json(updatedBook);
};

export const deleteBook = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ message: "Invalid book ID" });
    return;
  }

  const deleted = await bookService.deleteBook(id);

  if (!deleted) {
    res.status(404).json({ message: "Book not found" });
    return;
  }

  res.status(204).send();
};
