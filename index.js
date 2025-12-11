/**
 * Express.js Server Entry Point
 * 
 * A Node.js tutorial server implementing two HTTP GET endpoints:
 * - GET /hello - Returns "Hello world"
 * - GET /evening - Returns "Good evening"
 * 
 * @requires express@5.2.1 - Web application framework
 */

// Import Express.js framework using CommonJS syntax
const express = require('express');

// Create Express application instance
const app = express();

// Configure server port from environment variable with fallback to 3000
const PORT = process.env.PORT || 3000;

/**
 * GET /hello endpoint
 * Returns a greeting message "Hello world"
 * 
 * @route GET /hello
 * @returns {string} "Hello world" - Plain text response
 * @example curl http://localhost:3000/hello
 */
app.get('/hello', (req, res) => {
  res.send('Hello world');
});

/**
 * GET /evening endpoint
 * Returns a greeting message "Good evening"
 * 
 * @route GET /evening
 * @returns {string} "Good evening" - Plain text response
 * @example curl http://localhost:3000/evening
 */
app.get('/evening', (req, res) => {
  res.send('Good evening');
});

/**
 * Start the Express server
 * Listens on the configured PORT and logs a startup message
 */
app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});
