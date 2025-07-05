const registrationModel = require("../models/registration");

const loginUser = async (req, res) => {
  const { user_email, user_password } = req.body;

  // Admin login
  if (user_email === "admin@gmail.com" && user_password === "admin123") {
    return res.status(200).send({ message: "Admin login", role: "admin" });
  }

  try {
    const user = await registrationModel.findOne({ user_email });

    if (!user) {
      return res.status(404).send({ message: "User not registered." });
    }

    if (user.user_password !== user_password) {
      return res.status(401).send({ message: "Invalid password." });
    }

    res.status(200).send({ message: "User login", role: "user", user_name: user.user_name });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).send({ message: "Server error." });
  }
};

module.exports = { loginUser };
