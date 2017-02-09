### Installing

```bash
yarn add url-steroids
```

### Usage

```javascript
const URL = require('url-steroids');

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
```

### Tests
```bash
npm test
```

> Feel free for contribute
