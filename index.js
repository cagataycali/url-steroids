const req = require('req-fast');
const cheerio = require('cheerio');
const URL = require('url');

const getTitle = (url) => {
  return new Promise((resolve, reject) => {
    req(url, (err, res) => {
      if (err) reject(err);
      else {
        const $ = cheerio.load(res.body);
        const title = $('title').text();
        resolve(title);
      }
    });
  });
};

let parsed;
module.exports.parse = (url) => {
  return new Promise((resolve, reject) => {
    getTitle(url)
      .then((title) => {
        parsed = URL.parse(url);
        parsed.title = title;
        resolve(parsed);
      })
      .catch((err) => { reject(err); });
  });
};
