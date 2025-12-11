# Node.js Express Tutorial Server

A simple Node.js server tutorial demonstrating Express.js framework integration with HTTP endpoints.

## Description

This is a tutorial project showcasing how to build a basic Node.js server using the Express.js web application framework. The server hosts two HTTP GET endpoints that return simple text responses.

### Features

- Express.js framework integration (v5.2.1)
- Two HTTP GET endpoints
- Environment variable port configuration
- Simple and educational codebase

## Installation

Ensure you have Node.js (v18.0.0 or higher) installed on your system.

```bash
npm install
```

This command will install all dependencies including Express.js.

## Usage

Start the server with the following command:

```bash
npm start
```

The server will start on port 3000 by default. You can customize the port by setting the `PORT` environment variable:

```bash
PORT=8080 npm start
```

Once running, you will see the message:
```
Server running on port 3000
```

## Endpoints

The server exposes the following HTTP endpoints:

| Method | Endpoint   | Description                      | Response        |
|--------|------------|----------------------------------|-----------------|
| GET    | `/hello`   | Returns a hello world greeting   | `Hello world`   |
| GET    | `/evening` | Returns a good evening greeting  | `Good evening`  |

## Response Examples

### GET /hello

**Request:**
```bash
curl http://localhost:3000/hello
```

**Response:**
```
Hello world
```

**Status Code:** 200 OK

---

### GET /evening

**Request:**
```bash
curl http://localhost:3000/evening
```

**Response:**
```
Good evening
```

**Status Code:** 200 OK

## Project Structure

```
├── index.js          # Main Express server application
├── package.json      # Project manifest and dependencies
├── package-lock.json # Dependency lock file
├── .gitignore        # Git ignore patterns
└── README.md         # Project documentation
```

## Requirements

- Node.js v18.0.0 or higher
- npm (included with Node.js)

## License

This project is for educational purposes.
