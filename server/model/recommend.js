const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var RecommendSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: false
  },

  name: {
    type: String,
    required: true
  },

  praise: {
    type: String
  },

  recommender: {
    type: String
  },

  company: {
    type: String
  }
});

module.exports = mongoose.model("Recommend", RecommendSchema);