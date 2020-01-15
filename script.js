var apiKey = "DQ99xseSmJfhFUjox4O0vQvEKtMMl9M2";
var keyWord = "weather";
var limit = 0;
var startDate = "2000";
var endDate = "";

if(startDate != ""){
    var startDateParam = `&begin_date=${startDate + "0101"}`;
} else {var startDateParam = "";}

if(endDate != ""){
    var endDateParam = `&end_date=${endDate + "0101"}`;
} else {
    var endDateParam = "";
}

var url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=%22${keyWord}%22${startDateParam}${endDateParam}&fl=web_url&fl=lead_paragraph&api-key=${apiKey}`;

//find out how to use the startDate and endDate
console.log(url);