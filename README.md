### Installing

```bash
yarn add url-steroids
```

### Usage

```javascript
const URL = require('url-steroids');

// URL.parse
URL.parse('http://google.com')
  .then((res) => {
    console.log(res);
  });

/* Output:
  Url {
    protocol: 'http:',
    slashes: true,
    auth: null,
    host: 'google.com',
    port: null,
    hostname: 'google.com',
    hash: null,
    search: null,
    query: null,
    pathname: '/',
    path: '/',
    href: 'http://google.com/',
    title: 'Google'
  }
  */

  // URL.match
  URL.match('http://blog.mojilala.com/', 'https://mojilala.com')
    .then(() => console.log("It's matching."))
    .catch(() => console.log("It's not matching."));
  /* Output
    It's not matching.
  */

  URL.match('http://cagataycali.xyz/*', 'https://cagataycali.xyz/blog/')
    .then(() => console.log("It's matching."))
    .catch(() => console.log("It's not matching."));
  /* Output
    It's matching.
  */
```

### Tests
```bash
npm test
```

> Feel free for contribute
