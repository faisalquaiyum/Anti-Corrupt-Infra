const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["citizen", "ward_member", "gram_panchayat"], default: "citizen" },
  govCredential: String, // For officials
});

module.exports = mongoose.model("User", UserSchema);
