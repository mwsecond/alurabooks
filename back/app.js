const express = require("express");
const routerLivros = require("./routes/books");
const app = express();
const port = 8000;

app.use(express.json());

app.use("/books", routerLivros);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
