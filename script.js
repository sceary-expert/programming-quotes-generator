const quoteText = document.querySelector(".quote"),
	quoteButton = document.querySelector(".features button"),
	authorName = document.querySelector(".author .name");
soundButton = document.querySelector(".sound");
copyButton = document.querySelector(".copy");
linkedInButton = document.querySelector(".linkedIn");


function generateRandomQuote() {
	quoteButton.classList.add("dwell");
	quoteButton.innerText = "Loading quote..";
	console.log("User Just Clicked The Button");
	fetch("https://api.quotable.io/random").then(newQuote => newQuote.json()).then(generatedNewQuote => {
		console.log(generatedNewQuote);
		quoteText.innerText = generatedNewQuote.content;
		authorName.innerText = generatedNewQuote.author;
		quoteButton.innerText = "New Quote";
		quoteButton.classList.remove("dwell");
	})
};
function generateSound() {

	let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
	speechSynthesis.speak(utterance);

	console.log("Generating Sound");
};
function copyQuoteOnClipboard() {

	navigator.clipboard.writeText(quoteText.innerText);
};
function shareViaLinkedIn() {
	console.log("Sharing quote on LinkedIn...");
	let linkedInUrl = `https://www.linkedin.com/post/new/=${quoteText.innerText}`;
	window.open(linkedInUrl, "_blank");
}
soundButton.addEventListener("click", generateSound);
copyButton.addEventListener("click", copyQuoteOnClipboard);
linkedInButton.addEventListener("click", shareViaLinkedIn);

quoteButton.addEventListener("click", generateRandomQuote);