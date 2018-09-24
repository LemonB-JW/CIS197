var pullTrendingArticles = require('./pullTrendingArticles');
var countKeywords  = require('./countKeywords');
var pullRelatedArticles = require('./pullRelatedArticles');
var processKeywords = require('./processKeywords');

pullTrendingArticles(function (error, response) {
    var topKeyword = [];
    console.log(error);
    //console.log(response);

    countKeywords(response, function (cKerror, topKeywords) {
        topKeyword = topKeywords;
        console.log(cKerror)
//        console.log(topKeywords)
    })

    processKeywords(topKeyword, function (err, rel) {
        console.log(err);
        console.log(rel); // <- this is an array of JSON objects (each of which contains a bunch of articles for each keyword from the previous step
    })
})
//
// pullRelatedArticles('Williams, Serena', function (error, object) {
//    console.log(object);
// })