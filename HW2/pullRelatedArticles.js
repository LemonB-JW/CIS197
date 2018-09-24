var nyt = require('./api/nyt');

// Makes GET request to Search API (in our NYT wrapper), returns an object containing the query and
// the JSON metadata
var pullRelatedArticles = function (query, callback) {
  nyt.articleSearch(query, function (error, response, body) {
    var object = {};
    if (error === null && response.statusCode === 200) {
      object['query'] = query;
      object['JSON'] = body;
      callback(null, object);
          // to handle bad status code
    } else if (error === null && response.statusCode !== 200) {
      callback(new Error());
    } else {
      callback(error);
    }
  });
};

module.exports = pullRelatedArticles;
