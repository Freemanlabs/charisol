const mongoose = require('mongoose'),
  Schema = mongoose.Schema
const validate = require('mongoose-validator');
const beautifyUnique = require('mongoose-beautiful-unique-validation');


var validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

var ContactSchema = new mongoose.Schema({

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

  message: {
    type: String
  },

  email: {
    type: String,
    lowercase: true,
    required: 'Email is required',
    trim: true,
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },

  createdAt: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Contact', ContactSchema);  

