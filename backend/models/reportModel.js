import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  evidence: String,
  status: { type: String, default: "Pending" },
  date: { type: Date, default: Date.now },
});

const Report = mongoose.model("Report", reportSchema);
export default Report;
