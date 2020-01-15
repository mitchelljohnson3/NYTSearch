const apiKey = "DQ99xseSmJfhFUjox4O0vQvEKtMMl9M2";

let genUrl = (keyWord, limit, startDate, endDate) => {
    if(startDate != ""){
        var startDateParam = `&begin_date=${startDate + "0101"}`;
    } else {var startDateParam = "";}
    
    if(endDate != ""){
        var endDateParam = `&end_date=${endDate + "0101"}`;
    } else {
        var endDateParam = "";
    }
    return `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=%22${keyWord}%22${startDateParam}${endDateParam}&fl=web_url&fl=lead_paragraph&api-key=${apiKey}`;
};

let showError = () => {
    console.log("bad search");
}

var button = document.getElementById("submit");
var term = document.getElementById("term");
var limit = document.getElementById("limit");
var start = document.getElementById("start");
var end = document.getElementById("end");
button.addEventListener("click", () => {
    let goodSearch = true;
    if(term.value === "" || limit.value === ""){
        goodSearch = false;
    }
    if(goodSearch){
        let url = genUrl(term.value, limit.value, start.value, end.value);
        fetch(url).then((response) => {
            return response.json();
        }).then((json) => {
            displayArticles(json);
        })
    } else {
        showError();
    }
});

let displayArticles = (jsonObject) => {
    
}