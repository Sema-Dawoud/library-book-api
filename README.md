# Library Book Management API

A RESTful API built with **Node.js, Express 5, TypeScript, Prisma ORM, and PostgreSQL** for managing library books.

## Features

- Retrieve all books.
- Retrieve a book by ID.
- Add a new book.
- Update an existing book.
- Delete a book.
- Validate request data using Zod.
- Store book records in PostgreSQL.
- Automatically generate book IDs and timestamps.
- Persist data across server restarts.
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

The ID and timestamps are generated automatically by the database.

## Technologies

- Node.js
- Express 5
- TypeScript
- PostgreSQL
- Supabase
- Prisma ORM
- Zod
- tsx

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the project root and configure the following variables:

```env
DATABASE_URL="your_transaction_pooler_connection_string"
DIRECT_URL="your_session_pooler_connection_string"
```

Replace the placeholder values with your Supabase PostgreSQL connection strings.

**Important:** Never commit your `.env` file or expose database credentials.

## Database Setup

Generate the Prisma Client:

```bash
npx prisma generate
```

Apply database migrations:

```bash
npx prisma migrate dev --name init
```

Check migration status:

```bash
npx prisma migrate status
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

The database automatically generates the book ID and timestamps.

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
├── lib/
│   └── prisma.ts
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
├── generated/
│   └── prisma/
└── server.ts

prisma/
├── migrations/
└── schema.prisma

prisma7.config.ts
tsconfig.json
tsconfig.prisma.json
```

## Validation and Error Handling

- Zod validates incoming POST and PATCH request bodies.
- Invalid request data returns `400 Bad Request`.
- Invalid book IDs return `400 Bad Request`.
- Missing books return `404 Not Found`.
- Unexpected server errors return `500 Internal Server Error`.
- Successful creation returns `201 Created`.
- Successful retrieval and updates return `200 OK`.
- Successful deletion returns `204 No Content`.
- Empty update requests are rejected.
- Errors are logged in the server terminal.

## Data Storage

This project uses **PostgreSQL** hosted on **Supabase**.

Prisma ORM handles database operations, replacing the original in-memory storage.

Book records are stored persistently in the database and remain available even after the server restarts.

## Testing and Verification

The API endpoints were tested manually using Postman.

The following scenarios were verified:

- Creating a book.
- Retrieving all books.
- Retrieving a book by ID.
- Updating an existing book.
- Deleting a book.
- Validating invalid request data.
- Handling requests for non-existing books.
- Verifying data persistence after restarting the server.

TypeScript type checking and the production build were also executed successfully.

## AI Usage

AI tools were used as learning and development assistants during this project.

They helped with understanding concepts, Prisma and PostgreSQL integration, project setup, code explanations, troubleshooting, and documentation.

The implementation was reviewed and tested manually using Postman. The developer verified the API responses, database persistence, TypeScript type checking, and production build.
