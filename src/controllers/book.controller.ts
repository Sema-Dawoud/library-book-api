

import type { Request, Response } from "express";
import * as bookService from "../services/book.service.js";

export const getAllBooks = (
  _req: Request,
  res: Response,
): void => {
  res.status(200).json(bookService.getAllBooks());
};

export const getBookById = (
  req: Request,
  res: Response,
): void => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ message: "Invalid book ID" });
    return;
  }

  const book = bookService.getBookById(id);

  if (!book) {
    res.status(404).json({ message: "Book not found" });
    return;
  }

  res.status(200).json(book);
};

export const createBook = (
  req: Request,
  res: Response,
): void => {
  const book = bookService.createBook(req.body);
  res.status(201).json(book);
};

export const updateBook = (
  req: Request,
  res: Response,
): void => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ message: "Invalid book ID" });
    return;
  }

  const updatedBook = bookService.updateBook(id, req.body);

  if (!updatedBook) {
    res.status(404).json({ message: "Book not found" });
    return;
  }

  res.status(200).json(updatedBook);
};

export const deleteBook = (
  req: Request,
  res: Response,
): void => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ message: "Invalid book ID" });
    return;
  }

  const deleted = bookService.deleteBook(id);

  if (!deleted) {
    res.status(404).json({ message: "Book not found" });
    return;
  }

  res.status(204).send();
};
