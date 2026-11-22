# Library Book Management API

A RESTful API built with **Node.js, Express 5, and TypeScript** for managing library books.

## Features

- Retrieve all books.
- Retrieve a book by ID.
- Add a new book.
- Update an existing book.
- Delete a book.
- Validate request data using Zod.
- Automatically track book creation and update timestamps.
- Centralized error handling and error logging.
- Organized project structure.

## Book Model

Each book contains the following properties:

| Property | Type | Description |
|---|---|---|
| `id` | number | Unique book identifier |
| `title` | string | Book title |
| `author` | string | Book author |
| `genre` | string | Book genre |
| `available` | boolean | Book availability |
| `createdAt` | string | Date and time when the book was created |
| `updatedAt` | string | Date and time when the book was last updated |

The timestamps are generated automatically by the server.

## Technologies

- Node.js
- Express 5
- TypeScript
- Zod
- tsx

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

## Running the Project

Start the development server:

```bash
npm run dev
```

Build the TypeScript project:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

Run TypeScript type checking:

```bash
npm run typecheck
```

The API runs at:

`http://localhost:3000`

## API Endpoints

Base URL: `http://localhost:3000/api/books`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/books` | Get all books |
| GET | `/api/books/:id` | Get a book by ID |
| POST | `/api/books` | Create a new book |
| PATCH | `/api/books/:id` | Update a book |
| DELETE | `/api/books/:id` | Delete a book |

### Example: Create a Book

**POST** `/api/books`

```json
{
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "genre": "Programming",
  "available": true
}
```

The server automatically generates the book ID and timestamps.

### Example: Update a Book

**PATCH** `/api/books/3`

```json
{
  "available": false
}
```

The `updatedAt` timestamp changes automatically when a book is updated.

## Project Structure

```text
src/
├── controllers/
│   └── book.controller.ts
├── middlewares/
│   ├── error.middleware.ts
│   └── validate.middleware.ts
├── models/
│   └── book.model.ts
├── routes/
│   └── book.routes.ts
├── schemas/
│   └── book.schema.ts
├── services/
│   └── book.service.ts
└── server.ts
```

## Validation and Error Handling

- Zod validates incoming POST and PATCH request bodies.
- Invalid request data returns `400 Bad Request`.
- Invalid book IDs return `400 Bad Request`.
- Missing books return `404 Not Found`.
- Unexpected server errors return `500 Internal Server Error`.
- Successful deletion returns `204 No Content`.
- Errors are logged in the server terminal with timestamps.

## Data Storage

This project uses in-memory storage.

Books are stored in an array and reset to their initial data whenever the server restarts. No external database is used.

## AI Usage

AI tools were used as learning and development assistants during this project.

They helped with understanding concepts, project setup, code explanations, troubleshooting, and documentation.

The implementation was reviewed and tested manually using Postman. TypeScript type checking and the production build were also executed.
