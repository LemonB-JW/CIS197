var sax = require('sax');

// Counts keyword frequency of articles in the XML using sax, returns a string
// array of the five most popular keywords
var countKeywords = function (POPULAR_XML, callback) {
  // Create a SAX XML parser. The "false" argument indicates it won't accept invalid XML.
  var parser = sax.parser(false);
  var keyWord = {};
  var topKeyWord = [];
  var needCount = false;

  parser.onerror = function (e) {
    callback(e);
  };

  parser.ontext = function (t) {
    if (needCount === true) {
      var textArr = t.split(';');
      var cur = null;
      for (var i = 0; i < textArr.length; i++) {
        cur = textArr[i].trim();
        if (keyWord[cur] >= 1) {
          keyWord[cur] += 1;
        } else {
          keyWord[cur] = 1;
        }
      }
    }
    needCount = false;
  };

  parser.onopentag = function (node) {
    if (node.name === 'ADX_KEYWORDS') {
      needCount = true;
    }
  };

  parser.onclosetag = function (node) {

  };

  // HINT: the 'end' event happens only when the XML parser is finished.
  // This means you should be able to finalize your top keywords and call
  // the callback from this function!
  parser.onend = function () {
    var keys = Object.keys(keyWord);
    // define the sort order function sortByFreq
    var sortByFreq = function (a, b) {
      if (keyWord[a] === keyWord[b]) {
        return 0;
      }
      // if word a's frequency is larger, than we put a before b
      return keyWord[b] - keyWord[a];
    }
    keys.sort(sortByFreq);

    for (var i = 0; i < Math.min(5, keys.length); i++) {
      topKeyWord[i] = keys[i];
    }
    callback(null, topKeyWord);
  };

  // Kick off the parser with the input XML.
  parser.write(POPULAR_XML).close();
};

module.exports = countKeywords;
