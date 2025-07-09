const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { ping, registerUser } = require("./controllers/registrationController");
const { loginUser } = require("./controllers/loginController");
const { addProduct,getProduct,deleteProduct,updateStock } = require("./controllers/productController");
const upload = require("./middleware/uploads"); // <== Import multer middleware

const app = express();
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads")); // <== Serve uploaded images

const PORT = 8010;

const MONGODB_URL = "mongodb+srv://gokulrajc63:epzaHzvtaYnxf4re@todo.1czrgxx.mongodb.net/?retryWrites=true&w=majority&appName=todo";
mongoose
  .connect(MONGODB_URL)
  .then(() => console.log("Database Connected Successfully!"))
  .catch((err) => console.log("err", err));

// Routes
app.post("/ping", ping);
app.post("/register", registerUser);
app.post("/login", loginUser);
app.get("/getproduct", getProduct);
app.delete("/deleteproduct/:id", deleteProduct);
app.put("/updatestock/:id", updateStock);


// ✅ Use multer middleware for file upload
app.post("/addproduct", upload.single("photo"), addProduct);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
