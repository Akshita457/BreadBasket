
const express = require("express");
const Donation = require("../models/Donation");
const { protect, allowRoles } = require("../middleware/auth");

const router = express.Router();

// Create a new food donation
router.post(
  "/",
  protect,
  allowRoles("donor"),
  async (req, res) => {
    try {
      const {
        foodName,
        category,
        quantity,
        unit,
        description,
        location,
        contact,
        preparedDate,
        expiryDate,
        imageUrl
      } = req.body;

      if (
        !foodName ||
        !category ||
        !quantity ||
        !description ||
        !location ||
        !contact ||
        !preparedDate ||
        !expiryDate
      ) {
        return res.status(400).json({
          success: false,
          message: "Please fill in all required fields"
        });
      }

      if (new Date(expiryDate) <= new Date(preparedDate)) {
        return res.status(400).json({
          success: false,
          message: "Expiry date must be after preparation date"
        });
      }

      const donation = await Donation.create({
        donor: req.user.id,
        foodName,
        category,
        quantity,
        unit,
        description,
        location,
        contact,
        preparedDate,
        expiryDate,
        imageUrl
      });

      res.status(201).json({
        success: true,
        message: "Donation created successfully",
        donation
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to create donation"
      });
    }
  }
);

// Get donations created by the logged-in donor
router.get("/my", protect, allowRoles("donor"), async (req, res) => {
  try {
    const donations = await Donation.find({
      donor: req.user.id
    }).sort({ createdAt: -1 });

    res.json({
      success: true,
      count: donations.length,
      donations
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch your donations"
    });
  }
});

// Get all currently available donations
router.get("/", protect, async (req, res) => {
  try {
    const donations = await Donation.find({
      status: "available",
      expiryDate: { $gt: new Date() }
    })
      .populate("donor", "name")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: donations.length,
      donations
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch available donations"
    });
  }
});

module.exports = router;
