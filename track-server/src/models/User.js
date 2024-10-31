const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email:{
    type: String,
    unique: true,
    required: true
  },
  password:{
    type: String,
    required: true
  },
});

userSchema.pre('save', function() {

})

mongoose.model('User', userSchema);
