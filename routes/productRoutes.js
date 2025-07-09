const express = require("express");
const router = express.Router();
const { addProduct } = require("../controllers/productController");
const upload = require("../middleware/upload");

router.post("/addproduct", upload.single("photo"), addProduct);

module.exports = router;
