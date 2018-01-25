var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({

    local            : {
        email        : String,
        password     : String,
    }
  });

  var Schema =  mongoose.Schema({
  	name     :String,
  	age   : Number,
    file : String
  });

  //var user = mongoose.model('emp', Schema);
  module.export = mongoose.model('emp', Schema);

  userSchema.methods.generateHash = function(password) {
      return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };

  userSchema.methods.validPassword = function(password) {
      return bcrypt.compareSync(password, this.local.password);
  };

  module.exports = mongoose.model('User', userSchema);
