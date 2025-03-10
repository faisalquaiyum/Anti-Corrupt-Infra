import express from "express";
import Report from "../models/reportModel.js";

const router = express.Router();

// Create a New Report
router.post("/", async (req, res) => {
  try {
    const report = new Report(req.body);
    await report.save();
    res.status(201).json({ message: "Report submitted successfully", report });
  } catch (error) {
    res.status(500).json({ error: "Error submitting report" });
  }
});

// Get All Reports
router.get("/", async (req, res) => {
  try {
    const reports = await Report.find();
    res.json(reports);
  } catch (error) {
    res.status(500).json({ error: "Error fetching reports" });
  }
});

export default router;
