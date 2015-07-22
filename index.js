/**
 * Module dependencies
 */

var markdown = require('./lib/markdown');
var readFile = require('fs').readFile;
var matter = require('./lib/matter');
var Batch = require('batch');
var glob = require('glob');

/**
 * Export `Markdown`
 */

module.exports = Markdown;

/**
 * Initialize `Markdown`
 */

function Markdown(path, options, fn) {
  if (arguments.length == 2) {
    fn = options;
    options = {};
  }

  glob(path, options, function (err, files) {
    if (err) return fn(err);
    var batch = new Batch;
    var pending = 0;
    var out = {};

    files.forEach(function(file) {
      batch.push(function(done) {
        readFile(file, 'utf8', function(err, str) {
          if (err) return done(err);
          var obj = matter(str);
          obj.content = markdown(obj.content);
          out[file] = obj;
          done();
        })
      })
    });

    batch.end(function(err) {
      if (err) return fn(err);
      fn(null, out);
    })
  })
}
