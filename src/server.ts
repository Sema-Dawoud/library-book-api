
import express from "express";
import bookRoutes from "./routes/book.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/books", bookRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
