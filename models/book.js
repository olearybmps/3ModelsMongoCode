const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
        required: true,
    },
    isbn: String,
    description: String,
    genre: String,
    price: Number,
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
