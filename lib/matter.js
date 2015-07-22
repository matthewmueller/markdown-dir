/**
 * Module dependencies
 */

var Matter = require('gray-matter');

/**
 * Export `matter`
 */

module.exports = matter;

/**
 * Initialize `matter`
 */

function matter(str) {
  var obj = Matter(str);

  // cleanup
  obj.meta = obj.data;
  delete obj.data;
  delete obj.orig;

  return obj;
}
