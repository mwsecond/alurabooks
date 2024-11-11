const fs = require("fs");

function getAllBooks() {
  return JSON.parse(fs.readFileSync("books.json"));
}

function getBookPerId(id) {
  const books = JSON.parse(fs.readFileSync("books.json"));

  const bookFiltered = books.filter((book) => book.id === id)[0];
  return bookFiltered;
}

function insertBook(newBook) {
  const data = fs.readFileSync("books.json", "utf8");
  const books = JSON.parse(data);
  const newBookList = [...books, newBook];
  fs.writeFileSync("books.json", JSON.stringify(newBookList));
}

function modifyBook(modifications, id) {
  let currentBooks = JSON.parse(fs.readFileSync("books.json"));
  const indexModified = currentBooks.findIndex((book) => book.id === id);
  const modifiedContent = { ...currentBooks[indexModified], ...modifications };
  currentBooks[indexModified] = modifiedContent;
  fs.writeFileSync("books.json", JSON.stringify(currentBooks));
}

function deleteBookPerId(id) {
  const books = JSON.parse(fs.readFileSync("books.json"));
  const bookFiltered = books.filter((book) => book.id !== id);
  fs.writeFileSync("books.json", JSON.stringify(bookFiltered));
}

module.exports = {
  getAllBooks,
  getBookPerId,
  insertBook,
  modifyBook,
  deleteBookPerId,
};
