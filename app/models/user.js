var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');



var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: false,
  // clicks: function() {
  //   return this.hasMany(Click);
  // },
  // initialize: function() {
  //   this.on('creating', function(model, attrs, options) {
  //     var shasum = crypto.createHash('sha1');
  //     shasum.update(model.get('user'));
  //     model.set('code', shasum.digest('hex').slice(0, 5));
  //   });
  // }
});

module.exports = User;