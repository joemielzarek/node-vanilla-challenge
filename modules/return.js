var convert = require('./convert.js');
var randomNumber = require('./random.js');

var returnModule = {
  message : function() {
    return 'Account balance: \n';
  },
   dollars: function() {
    return convert;
  }
};

module.exports = returnModule;
