const express = require("express");
const router = express.Router();
const Book = require("../model/book_model");
const booksController = require("../controllers/book_controller");

router.get("/", booksController.getAllBooks);
router.post("/", booksController.addBook);

router.get("/:id",booksController.getById)

//put use for update
router.put("/:id",booksController.updateBook)
router.delete("/:id",booksController.deleteBook)

module.exports = router;
