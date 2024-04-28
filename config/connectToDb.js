require('dotenv').config();

const mongoose = require('mongoose');

const connectToDb = async () => {
    await mongoose.connect(process.env.DB_URL);
    console.log(`Currently connected to MongoDB`);
};

module.exports = connectToDb;