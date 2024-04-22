const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const port = 3000;
const app = express();

const { auth, unsubscribe, createUser, sigin, userData } = require("./firebase.js");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/products", async (req, res) => {
  try {
    console.log(req.body, "body");
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/api/products", async (req, res) => {
  try {
    
    const products = await Product.find({});
    await sigin("test2@gmail.com", "test2@gmail.com");
    console.log(userData, "logged in get");

    res.status(200).json(userData);

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

mongoose
  .connect(
    "mongodb+srv://admin:admin@crudapi.7noh72e.mongodb.net/CRUD-COLLECTION?retryWrites=true&w=majority&appName=CRUDAPI"
  )
  .then(async () => {
    console.log("Connected to DB!");
    app.listen(port, () => {
      console.log(`App listening at http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));
 