const Book = require("../models/Book");

// @desc Create a new Book
// @route POST /api/books
// @access PRIVATE
const createBook = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc Get all books for a user
// @route GET /api/books
// @access PRIVATE
const getBook = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc Get a single book by ID
// @route GET /api/books/:id
// @access PRIVATE
const getBookById = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc Update a book
// @route PUT /api/books/:id
// @access PRIVATE
const updateBook = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc Delete a book
// @route DELETE /api/books/:id
// @access PRIVATE
const deleteBook = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  createBook,
  getBook,
  getBookById,
  updateBook,
  deleteBook,
};
