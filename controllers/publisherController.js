const Publisher = require('../models/publisher');

// Get all publishers
const getAllPublishers = async (req, res) => {
    try {
        const publishers = await Publisher.find();
        res.json(publishers);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Get a single publisher by ID
const getPublisherById = async (req, res) => {
    try {
        const publisher = await Publisher.findById(req.params.id);
        if (!publisher) {
            return res.status(404).json({ error: 'Publisher not found' });
        }
        res.json(publisher);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Create a new publisher
const createPublisher = async (req, res) => {
    try {
        const publisher = await Publisher.create(req.body);
        res.status(201).json(publisher);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Update a publisher by ID
const updatePublisher = async (req, res) => {
    try {
        const publisher = await Publisher.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!publisher) {
            return res.status(404).json({ error: 'Publisher not found' });
        }
        res.json(publisher);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Delete a publisher by ID
const deletePublisher = async (req, res) => {
    try {
        const publisher = await Publisher.findByIdAndDelete(req.params.id);
        if (!publisher) {
            return res.status(404).json({ error: 'Publisher not found' });
        }
        res.json({ message: 'Publisher deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = {
    getAllPublishers,
    getPublisherById,
    createPublisher,
    updatePublisher,
    deletePublisher,
};
