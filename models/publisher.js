const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema({
    name: String,
    country: String,
    website: String,
    foundedYear: Number,
});

const Publisher = mongoose.model('Publisher', publisherSchema);

module.exports = Publisher;
