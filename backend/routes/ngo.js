
const express = require("express");
const mongoose = require("mongoose");
const Donation = require("../models/Donation");
const { protect, allowRoles } = require("../middleware/auth");

const router = express.Router();

// View available donations
router.get(
  "/donations",
  protect,
  allowRoles("ngo"),
  async (req, res) => {
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
        message: "Failed to fetch donations"
      });
    }
  }
);

// Accept a donation
router.patch(
  "/donations/:id/accept",
  protect,
  allowRoles("ngo"),
  async (req, res) => {
    try {
      if (!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).json({
          success: false,
          message: "Invalid donation ID"
        });
      }

      const donation = await Donation.findOneAndUpdate(
        {
          _id: req.params.id,
          status: "available",
          expiryDate: { $gt: new Date() }
        },
        {
          $set: {
            status: "accepted",
            acceptedBy: req.user.id
          }
        },
        { new: true, runValidators: true }
      );

      if (!donation) {
        return res.status(409).json({
          success: false,
          message: "Donation is unavailable or already accepted"
        });
      }

      res.json({
        success: true,
        message: "Donation accepted successfully",
        donation
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to accept donation"
      });
    }
  }
);


 // Get donations accepted by the logged-in NGO
router.get(
  "/my-donations",
  protect,
  allowRoles("ngo"),
  async (req, res) => {
    try {
      const donations = await Donation.find({
        acceptedBy: req.user.id
      })
        .populate("donor", "name")
        .sort({ updatedAt: -1 });

      res.json({
        success: true,
        count: donations.length,
        donations
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch your accepted donations"
      });
    }
  }
);

module.exports = router;
