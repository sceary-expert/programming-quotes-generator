const quoteText = document.querySelector(".quote"),
quoteButton = document.querySelector(".features button"),
authorName = document.querySelector(".author .name");
soundButton = document.querySelector(".sound");
copyButton = document.querySelector(".copy");
linkedInButton = document.querySelector(".linkedIn");


function generateRandomQuote(){
    quoteButton.classList.add("dwell");
    quoteButton.innerText ="Loading quote..";
    console.log("User Just Clicked The Button");
    fetch("http://api.quotable.io/random").then(newQuote => newQuote.json()).then(generatedNewQuote =>{
        console.log(generatedNewQuote);
        quoteText.innerText = generatedNewQuote.content;
        authorName.innerText = generatedNewQuote.author;
        quoteButton.innerText ="New Quote";
        quoteButton.classList.remove("dwell");  
    })
    setBackground();  
};
function generateSound(){

    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);
    console.log("Generating Sound");
};
function copyQuoteOnClipboard(){
    
    navigator.clipboard.writeText(quoteText.innerText);
};
function shareViaLinkedIn(){
    console.log("Sharing quote on LinkedIn...");
    let linkedInUrl = `https://www.linkedin.com/post/new/=${quoteText.innerText}`;
    window.open(linkedInUrl, "_blank");
}
soundButton.addEventListener("click", generateSound);
copyButton.addEventListener("click", copyQuoteOnClipboard);
linkedInButton.addEventListener("click", shareViaLinkedIn);

quoteButton.addEventListener("click", generateRandomQuote);


// random color generator code

const setBackground = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    quoteButton.style.backgroundColor = "#" + randomColor;
    linkedInButton.style.backgroundColor = "#" + randomColor;
    soundButton.style.backgroundColor = "#" + randomColor;
    copyButton.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
  }
  
