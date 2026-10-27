# HTTP Server

A static website served by a web server written with Node's built-in `http` module — no Express.

## Features
- Serves HTML pages from `public/` based on the URL (`/about` → `about.html`)
- Sets the correct `Content-Type` per file extension (HTML, CSS, JS, JSON)
- Custom 404 page

## Usage
```bash
npm install
node server.js   # http://localhost:8080
```

## What I learned
- What frameworks like Express do for you: routing, headers and status codes
- Reading files from disk and sending them in a response
