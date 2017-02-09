const URL = require('./index.js');

test('get title from url', () => {
  URL.parse('http://google.com')
    .then((res) => {
      expect(res.title).toBe('Google');
    });
});
