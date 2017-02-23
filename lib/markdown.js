/**
 * Module Dependencies
 */

var md = require('markdown-render')

/**
 * Export `render`
 */

module.exports = render

/**
 * Initialize render
 *
 * @param {String} str
 * @return {String}
 * @api public
 */

function render (str) {
  return md(str)
}
