var mongoose = require("mongoose");

//schema
var playersSchema = mongoose.Schema({
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  name: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  role: {
    type: String,
    required: true,
    lowercase: true,
  },
  battingStyle: {
    type: String,
    required: true,
    lowercase: true,
  },
  bowlingStyle: {
    type: String,
    required: true,
    lowercase: true,
  },
});

const Players = mongoose.model("players details", playersSchema);
module.exports = Players;
