const {
  getAllBooks,
  getBookPerId,
  insertBook,
  modifyBook,
  deleteBookPerId,
} = require("../services/bookServices");

function getBooks(req, res) {
  try {
    const books = getAllBooks();
    res.send(books);
  } catch (error) {
    res.status(500);
    res.send({ error: error.Error() });
  }
}

function getBook(req, res) {
  try {
    const id = req.params.id;
    if (id && Number(id)) {
      const book = getBookPerId(id);
      res.send(book);
    } else {
      res.status(422);
      res.send("Id inválido");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postBook(req, res) {
  try {
    const insertedBook = insertBook(req.body);
    res.status(201);
    res.send(insertedBook);
  } catch (error) {
    res.status(500);
    res.send({ error });
  }
}

function patchBook(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      const body = req.body;
      modifyBook(body, id);
      res.send("Item modificado com sucesso");
    } else {
      res.status(422);
      res.send("Id inválido");
    }
  } catch (error) {
    res.status(500);
    res.send({ error });
  }
}

function deleteBook(req, res) {
  try {
    const id = req.params.id;
    if (id && Number(id)) {
      deleteBookPerId(id);
      res.send("livro deletado com sucesso");
    } else {
      res.status(422);
      res.send("ID inválido");
    }
  } catch (error) {
    res.status(500);
    res.send({ error });
  }
}

module.exports = {
  getBooks,
  getBook,
  postBook,
  patchBook,
  deleteBook,
};
