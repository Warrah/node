// app.js

// Import the HTTP module to create an HTTP server.
const http = require('http');

// Configure the HTTP server to respond with "Hello, World!" for all requests.
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

// Define the port the server will listen on.
const port = 3000;

// Start the server and listen on the specified port.
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
