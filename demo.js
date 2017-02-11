const URL = require('./index');

URL.parse('http://google.com')
  .then(res => console.log(res))
  .catch(err => console.log(err));

URL.match('http://cagataycali.xyz/*', 'https://cagataycali.xyz/blog/')
  .then(() => console.log("It's matching."))
  .catch(() => console.log("It's not matching."));
