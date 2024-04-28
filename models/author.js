const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    bio: String,
    dateOfBirth: Date,
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;
