var markdown = require('./');

markdown('test/*.md', function(err, files) {
  if (err) throw err;
  console.log(files);
})
