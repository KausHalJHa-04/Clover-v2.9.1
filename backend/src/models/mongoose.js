const mongoose = require('mongoose');
// Use native Promises instead of the removed 'whitebird' package
mongoose.Promise = global.Promise;
module.exports = mongoose;
