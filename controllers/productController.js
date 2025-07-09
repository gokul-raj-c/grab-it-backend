const Product = require("../models/product");

const addProduct = async (req, res) => {
  try {
    const {
      product_name,
      product_brand,
      product_material,
      product_quantity,
      product_rating,
      product_price,
      product_category,
    } = req.body;

    const product_photo = req.file.filename;

    const newProduct = new Product({
      product_name,
      product_brand,
      product_material,
      product_quantity,
      product_rating,
      product_price,
      product_category,
      product_photo,
    });

    await newProduct.save();
    res.status(201).json({ message: "Product added successfully." });
  } catch (err) {
    console.error("Add Product Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

const getProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    console.error("Get Product Error:", err);
    res.status(400).json({ message: "Could not fetch products" });
  }
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    console.error("Delete Error:", err);
    res.status(400).json({ message: "Failed to delete product" });
  }
};

const updateStock = async (req, res) => {
  const id = req.params.id;
  const newQuantity = req.body.quantity;

  try {
    await Product.findByIdAndUpdate(id, {
      product_quantity: newQuantity,
    });
    res.status(200).json({ message: "Stock updated successfully" });
  } catch (err) {
    console.error("Update Stock Error:", err);
    res.status(400).json({ message: "Failed to update stock" });
  }
};




module.exports = {
  addProduct,
  getProduct,
  deleteProduct,
  updateStock,
};
