var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#user-input");
var outputText = document.querySelector("#translatedOutput");
var url = "https://api.funtranslations.com/translate/minion.json";

btnTranslate.addEventListener("click", clickHandler);

function urlHandler(text) {
    var finalUrl = url + "?text=" + text;
    var encodedURL = encodeURI(finalUrl);
  
    return encodedURL;
}

function clickHandler(event) {
    var message = inputText.value;
    var finalUrl = urlHandler(message);
  
    fetch(finalUrl)
      .then((response) => response.json())
      .then((json) => {
        outputText.innerText = json.contents.translated;
      })
      .catch(() => {
        {
          alert("Error occured");
        }
      });
  }