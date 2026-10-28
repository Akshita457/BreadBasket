
const express = require("express");
const mongoose = require("mongoose");
const Donation = require("../models/Donation");
const { protect, allowRoles } = require("../middleware/auth");

const router = express.Router();

// Donor cancels their own available donation
router.patch(
  "/:id/cancel",
  protect,
  allowRoles("donor"),
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
          donor: req.user.id,
          status: "available"
        },
        { $set: { status: "cancelled" } },
        { new: true, runValidators: true }
      );

      if (!donation) {
        return res.status(409).json({
          success: false,
          message: "Donation not found or cannot be cancelled"
        });
      }

      res.json({
        success: true,
        message: "Donation cancelled successfully",
        donation
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to cancel donation"
      });
    }
  }
);

// Accepted NGO updates pickup/completion status
router.patch(
  "/:id/status",
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

      const { status } = req.body;

      if (!["picked_up", "completed"].includes(status)) {
        return res.status(400).json({
          success: false,
          message: "Status must be picked_up or completed"
        });
      }

      const allowedPreviousStatuses =
        status === "picked_up" ? ["accepted"] : ["picked_up"];

      const donation = await Donation.findOneAndUpdate(
        {
          _id: req.params.id,
          acceptedBy: req.user.id,
          status: { $in: allowedPreviousStatuses }
        },
        { $set: { status } },
        { new: true, runValidators: true }
      );

      if (!donation) {
        return res.status(409).json({
          success: false,
          message: "Donation not found or status transition is not allowed"
        });
      }

      res.json({
        success: true,
        message: `Donation status updated to ${status}`,
        donation
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to update donation status"
      });
    }
  }
);

module.exports = router;
