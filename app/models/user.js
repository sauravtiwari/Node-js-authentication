var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var userSchema = mongoose.Schema({

    local            : {
        email        : String,
        password     : String,
    }
  });

  userSchema.methods.generateHash = function(password) {
      return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };

  // checking if password is valid
  userSchema.methods.validPassword = function(password) {
      return bcrypt.compareSync(password, this.local.password);
  };

  module.exports = mongoose.model('User', userSchema);
