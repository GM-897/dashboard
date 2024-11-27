const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  designation: { type: String, required: true },
  status: { type: String, enum: ["active", "inactive"], default: "active" },
});

module.exports = mongoose.model("User", userSchema);