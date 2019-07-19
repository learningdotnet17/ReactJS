// keys.js - figures out which set of keys to return

if (process.env.NODE_ENV === 'production') {
  //production
  module.exports = require('./prod');
} else {
  //dev
  module.exports = require('./dev');
}
