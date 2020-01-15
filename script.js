var apiKey = "DQ99xseSmJfhFUjox4O0vQvEKtMMl9M2";
var keyWord = "";
var limit = 0;
var startDate = "";
var endDate = "";

var url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=%22${keyWord}%22&api-key=${apiKey}`;

//find out how to use the startDate and endDate