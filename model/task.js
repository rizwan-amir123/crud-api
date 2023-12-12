const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  assignee: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  status: {
      type: String,
      required: true,
  },
});

module.exports = mongoose.model("Tasks", taskSchema);
