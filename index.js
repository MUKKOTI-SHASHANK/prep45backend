const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

//as its mentioned in the assignment to use an in-memory data structure (like an array) on the server side to hold the book inventory I have declared an array books
let books = [];
let count=books.length;

// by using post method I have added books to the array books, to give id to each book I used array's length+1 (as new book added will be pushed)
app.post('/books', (req, res) => {
  const book = req.body;
  book.id = books.length + 1;
  books.push(book);
  res.send(book);
});

//to get all books in the array I have used the GET method
app.get('/books', (req, res) => {
  res.send(books);
});


//to delete a book I have used delete method
app.delete('/books/:id', (req, res) => {
  books = books.filter((book) => book.id !== parseInt(req.params.id));
  res.send('Book removed successfully.');
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running on port ${port}.`));
