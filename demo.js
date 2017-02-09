const URL = require('./index');

URL.parse('http://google.com')
  .then((res) => {
    console.log(res);
  });
