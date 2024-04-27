const express = require("express");
const mongoose = require("mongoose");
// const Product = require("./models/product.model.js");
const productRoutes = require("./routes/products.route.js");
const port = 4000;
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
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
