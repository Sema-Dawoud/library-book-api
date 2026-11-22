
import { Router } from "express";
import * as bookController from "../controllers/book.controller.js";
import { validate } from "../middlewares/validate.middleware.js";
import {
  createBookSchema,
  updateBookSchema,
} from "../schemas/book.schema.js";

const router = Router();

router.get("/", bookController.getAllBooks);
router.get("/:id", bookController.getBookById);
router.post("/", validate(createBookSchema), bookController.createBook);
router.patch("/:id", validate(updateBookSchema), bookController.updateBook);
router.delete("/:id", bookController.deleteBook);

export default router;
