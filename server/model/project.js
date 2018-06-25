const mongoose = require('mongoose'),
  Schema = mongoose.Schema
const validate = require('mongoose-validator');
var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

var ProjectSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
    validate: validate({
      validator: 'isLength',
      arguments: [3, 20],
      passIfEmpty: false,
      message: 'First Name should be between {ARGS[0]} and {ARGS[1]} characters',
    })
  },

  startDate: {
    type: String
  },

  tel: {
    type: String
  },


  description: {
    type: String
  },

  personalNeeded: {
    type: String
  },


  startDate: {
    type: Date
  },

  createdAt: {
    type: Date,
    default: Date.now
  },

  billing: {
    type: String
  },

  email: {
    type: String,
    lowercase: true,
    required: 'Email is required',
    trim: true,
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  }
});

module.exports = mongoose.model('Project', ProjectSchema); 