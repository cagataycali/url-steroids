const req = require('req-fast');
const cheerio = require('cheerio');
const URL = require('url');

const getTitle = function getTitleFromUrl(url) {
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
module.exports.parse = function parse(url) {
  return new Promise((resolve, reject) => {
    getTitle(url)
      .then((title) => {
        parsed = URL.parse(url);
        parsed.title = title;
        resolve(parsed);
      })
      .catch(err => reject(err));
  });
};

module.exports.match = (case1, case2) => {
  const param = URL.parse(case1);
  const query = URL.parse(case2);
  return new Promise((resolve, reject) => {
    if (param.hostname === query.hostname || param.host === query.host) {
      if (param.path.includes('*')) {
        if (query.pathname.match(param.pathname)) {
          resolve(true);
        } else {
          reject(false);
        }
      } else {
        if (query.pathname.split('/').join('') === param.pathname.split('/').join('')) {
          resolve(true);
        } else {
          reject(false);
        }
      }
    } else reject(false);
  });
};
