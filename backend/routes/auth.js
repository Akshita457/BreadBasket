
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { protect } = require("../middleware/auth");

const router = express.Router();

function createToken(user) {
  return jwt.sign(
    {
      id: user._id.toString(),
      role: user.role
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
}

// Register a new user
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, phone, role } = req.body;

    if (!name || !email || !password || !phone) {
      return res.status(400).json({
        message: "Name, email, phone and password are required"
      });
    }

    if (typeof phone !== "string" || !/^\d{10}$/.test(phone)) {
      return res.status(400).json({
        message: "Phone number must contain exactly 10 digits"
      });
    }

    if (typeof name !== "string" ||
        typeof email !== "string" ||
        typeof password !== "string") {
      return res.status(400).json({
        message: "Invalid input"
      });
    }

    if (name.trim().length > 100 ||
        email.trim().length > 254 ||
        password.length < 8 ||
        password.length > 72) {
      return res.status(400).json({
        message: "Check your name, email and password length"
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      return res.status(400).json({
        message: "Enter a valid email address"
      });
    }

    const allowedRoles = ["donor", "ngo", "volunteer"];

    if (role && !allowedRoles.includes(role)) {
      return res.status(400).json({
        message: "Invalid registration role"
      });
    }

    const existingUser = await User.findOne({
      email: normalizedEmail
    });

    if (existingUser) {
      return res.status(409).json({
        message: "An account with this email already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      name: name.trim(),
      email: normalizedEmail,
      phone,
      password: hashedPassword,
      role: role || "donor"
    });

    const token = createToken(user);

    return res.status(201).json({
      message: "Registration successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role
      }
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        message: "An account with this email already exists"
      });
    }

    console.error("Registration error:", error.message);

    return res.status(500).json({
      message: "Registration failed"
    });
  }
});

// Log in an existing user
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (typeof email !== "string" ||
        typeof password !== "string" ||
        !email.trim() ||
        !password) {
      return res.status(400).json({
        message: "Email and password are required"
      });
    }

    const user = await User.findOne({
      email: email.trim().toLowerCase()
    }).select("+password");

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    const token = createToken(user);

    return res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role
      }
    });
  } catch (error) {
    console.error("Login error:", error.message);

    return res.status(500).json({
      message: "Login failed"
    });
  }
});

// Get the currently logged-in user's details
router.get("/me", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    return res.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: "Could not retrieve user"
    });
  }
});

module.exports = router;
