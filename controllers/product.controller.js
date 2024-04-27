const Product = require("../models/product.model.js");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error });
  }
};
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    // Check for errors before sending updated product
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    console.log(product);

    // res.status(404).json({ message: "Product not found" });

    const updatedProduct = await Product.findById(id);

    // Send updated product to the client
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    // Check for errors before sending updated product
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    // Send updated product to the client
    res.status(200).json({ message: "Product deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error });
  }
};
module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
