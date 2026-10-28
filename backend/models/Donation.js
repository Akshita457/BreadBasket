
const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema(
  {
    donor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    foodName: {
      type: String,
      required: true,
      trim: true
    },

    category: {
      type: String,
      enum: ["Cooked", "Bakery", "Fruits", "Packaged"],
      required: true
    },

    quantity: {
      type: Number,
      required: true,
      min: 1
    },

    unit: {
      type: String,
      enum: ["Meals", "Boxes", "Kg", "Packets", "Items"],
      default: "Meals",
      required: true
    },

    description: {
      type: String,
      required: true,
      trim: true
    },

    location: {
      type: String,
      required: true,
      trim: true
    },

    contact: {
      type: String,
      required: true,
      trim: true
    },

    preparedDate: {
      type: Date,
      required: true
    },

    expiryDate: {
      type: Date,
      required: true
    },

    imageUrl: {
      type: String,
      default: ""
    },

    status: {
      type: String,
      enum: [
        "available",
        "accepted",
        "picked_up",
        "completed",
        "cancelled"
      ],
      default: "available"
    },

    acceptedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Donation", donationSchema);
