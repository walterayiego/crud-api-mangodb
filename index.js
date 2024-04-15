const express = require("express");
const mongoose = require("mongoose");
const port = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose
  .connect(
    "mongodb+srv://admin:admin@crudapi.7noh72e.mongodb.net/CRUD-COLLECTION?retryWrites=true&w=majority&appName=CRUDAPI"
  )
  .then(() => {
    console.log("Connected to DB!");
    app.listen(port, () => {
      console.log(`App listening at http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));
