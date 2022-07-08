var inputArea = document.querySelector("#input-area");
var btnTranslate = document.querySelector("#translate-btn");
var outputArea = document.querySelector("#output-area");

var url = "https://api.funtranslations.com/translate/mandalorian.json";

function contructUrl(text) {
    return url + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("Error Occurred.", error)
    alert("Something went wrong with server! Try again after some time.")
}

function fetchTranslatedText(text) {
    fetch(contructUrl(text))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputArea.innerText = translatedText;
            console.log(json);
        })
        .catch(errorHandler)
}

function clickHandler() {
    var inputText = inputArea.value;
    fetchTranslatedText(inputText)
}

btnTranslate.addEventListener("click", clickHandler)