var randomNumber = require('./random.js');

var convertModule = randomNumber(100,1000000).toLocaleString('en-US', { style: 'currency', currency: 'USD' });


module.exports = convertModule;
