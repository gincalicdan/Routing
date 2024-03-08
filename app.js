// app.js
const express = require('express');
const app = express();
const port = 7000;

// Routes
const routes = require('./route');

// Middleware
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
