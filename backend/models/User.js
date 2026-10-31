
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    phone: {
      type: String,
      required: true,
      match: /^\d{10}$/
    },
    password: {
      type: String,
      required: true,
      select: false
    },
    role: {
      type: String,
      enum: ["donor", "ngo", "volunteer", "admin"],
      required: true,
      default: "donor"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
