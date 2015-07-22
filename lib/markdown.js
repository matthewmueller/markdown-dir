/**
 * Module Dependencies
 */

var Remarkable = require('remarkable');

/**
 * Export `render`
 */

module.exports = render;

/**
 * Initialize render
 *
 * @param {String} str
 * @return {String}
 * @api public
 */

function render(str, options) {
  var md = new Remarkable(options || {});

  try {
    return md.render(str);
  } catch (e) {
    return e;
  }
}
