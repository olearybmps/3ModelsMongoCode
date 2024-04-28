require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const connectToDb = require('./config/connectToDb.js');
const cors = require('cors');

// Import the controller modules
const bookController = require('./controllers/bookController');
const authorController = require('./controllers/authorController');
const publisherController = require('./controllers/publisherController');

// Middleware
app.use(express.json());
app.use(cors());

// Connect to the database
connectToDb();

// Define routes for books
app.get('/books', bookController.getAllBooks);
app.get('/books/:id', bookController.getBookById);
app.post('/books', bookController.createBook);
app.put('/books/:id', bookController.updateBook);
app.delete('/books/:id', bookController.deleteBook);

// Define routes for authors
app.get('/authors', authorController.getAllAuthors);
app.get('/authors/:id', authorController.getAuthorById);
app.post('/authors', authorController.createAuthor);
app.put('/authors/:id', authorController.updateAuthor);
app.delete('/authors/:id', authorController.deleteAuthor);

// Define routes for publishers
app.get('/publishers', publisherController.getAllPublishers);
app.get('/publishers/:id', publisherController.getPublisherById);
app.post('/publishers', publisherController.createPublisher);
app.put('/publishers/:id', publisherController.updatePublisher);
app.delete('/publishers/:id', publisherController.deletePublisher);

app.listen(PORT, () => {
    console.log(`Express server is listening on port num ${PORT}`);
});
