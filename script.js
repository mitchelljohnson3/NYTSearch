var apiKey = "DC6Gaxb9OrpUuqq3HHVItGoekb60UPhr";
var keyWord = "";
var limit = 0;
var startDate = "";
var endDate = "";

var url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=%22${keyWord}%22&api-key=${apiKey}`;

//find out how to use the startDate and endDate