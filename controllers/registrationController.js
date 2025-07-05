const registrationModel = require("../models/registration");

const ping = (req, res) => {
  res.status(200).send({ message: "pong" });
};

const registerUser = async (req, res) => {
  const { user_name, user_email, user_password } = req.body;

  try {
    // Check if user already exists by email
    const existingUser = await registrationModel.findOne({ user_email });

    if (existingUser) {
      return res.status(409).send({ message: "Email already registered." });
    }

    // Create and save new user
    const newUser = new registrationModel({ user_name, user_email, user_password });
    await newUser.save();

    res.status(201).send({ message: "Registration Successful" });
  } catch (err) {
    console.error("Error during registration:", err);
    res.status(500).send({ message: "Registration Failed" });
  }
};

module.exports = { ping, registerUser };
