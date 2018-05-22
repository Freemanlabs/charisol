const mongoose = require('mongoose'),
  Schema = mongoose.Schema
const validate = require('mongoose-validator');
const beautifyUnique = require('mongoose-beautiful-unique-validation');
const GENDER = ['Male', 'Female'];

var validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

var TeamSchema = new mongoose.Schema({

  firstName: {
    type: String,
    required: true,
    validate: validate({
      validator: 'isLength',
      arguments: [3, 20],
      passIfEmpty: false,
      message: 'First Name should be between {ARGS[0]} and {ARGS[1]} characters',
    })
  },

  lastName: {
    type: String,
    required: true,
    validate: validate({
      validator: 'isLength',
      arguments: [3, 20],
      passIfEmpty: false,
      message: 'last Name should be between {ARGS[0]} and {ARGS[1]} characters',
    })
  },

  image_url: {
    type: String
  },

  positionNumber: {
    type: Number
  },


  biography: {
    type: String
  },


  position: {
    type: String
  },

  phoneNumber: {
    type: String
  },

  address: {
    type: String
  },

  slogan: {
    type: String
  },

  gender: {
    type: String,
    enum: GENDER
  },

  biography: {
    type: String,
  },

  githubUsername: {
    type: String,
  },

  email: {
    type: String,
    lowercase: true,
    required: 'Email is required',
    unique: 'email already exit ({VALUE})',
    trim: true,
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },

  skills: [
    { type: Schema.Types.ObjectId, ref: 'Skill' }
  ]
});

module.exports = mongoose.model('Team', TeamSchema);  

