const apiKey = "DQ99xseSmJfhFUjox4O0vQvEKtMMl9M2";

let genUrl = (keyWord, startDate, endDate) => {
    if(startDate != ""){
        var startDateParam = `&begin_date=${startDate + "0101"}`;
    } else {var startDateParam = "";}
    
    if(endDate != ""){
        var endDateParam = `&end_date=${endDate + "0101"}`;
    } else {
        var endDateParam = "";
    }
    return `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=%22${keyWord}%22${startDateParam}${endDateParam}&fl=web_url&fl=lead_paragraph&fl=pub_date&api-key=${apiKey}`;
};

let showError = () => {
    console.log("bad search");
}

var button = document.getElementById("submit");
var term = document.getElementById("term");
var start = document.getElementById("start");
var end = document.getElementById("end");
var limit = document.getElementById("limit");
var contentDiv = document.getElementById("content-div");

button.addEventListener("click", () => {
    contentDiv.innerHTML = "";
    let goodSearch = true;
    if(term.value === "" || limit.value === ""){
        goodSearch = false;
    }
    if(goodSearch){
        let url = genUrl(term.value, start.value, end.value);
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
    var articles = jsonObject.response.docs;
    var lim = limit.value;
    for(let i = 0; i < lim; i++){
        let newDiv = document.createElement("div");
        let title = document.createElement("h2");
        let pubDate = document.createElement("p");
        let url = document.createElement("a");

        title.textContent = articles[i].lead_paragraph;
        pubDate.textContent = "Publish date: " + articles[i].pub_date.split("T")[0];
        url.setAttribute("href", articles[i].web_url);
        url.textContent = articles[i].web_url;
        newDiv.appendChild(title);
        newDiv.appendChild(pubDate);
        newDiv.appendChild(url);
        newDiv.setAttribute("style", "border: 1px solid black; margin-bottom: 10px");

        contentDiv.appendChild(newDiv);
    }
}