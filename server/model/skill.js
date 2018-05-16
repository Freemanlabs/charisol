const mongoose = require('mongoose'),
  Schema = mongoose.Schema




var SkillSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
    unique: true
  },

  description: {
    type: String,
  },
});

module.exports = mongoose.model('Skill', SkillSchema);  
