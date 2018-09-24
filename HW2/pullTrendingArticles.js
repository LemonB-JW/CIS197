var nyt = require('./api/nyt');

// Makes GET request to Most Popular API (via nyt), returns an XML string containing
// article metadata
var pullTrendingArticles = function (callback) {
  nyt.mostPopular(function (error, response, body) {
    // note that error will be NOT null if the request.statusCode is 200. Otherwise, there will be an error
    // Your code goes here
    if (error === null && response.statusCode === 200) {
      callback(null, body);
      // to handle bad status code
    } else if (error === null && response.statusCode !== 200) {
      callback(new Error());
    } else {
      callback(error);
    }
  });
};

module.exports = pullTrendingArticles;
