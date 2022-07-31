const listOfQuotes = [
    {
        quote: "The oldest and strongest emotion of mankind is fear, and the oldest and strongest kind of fear is fear of the unknown",
        author: "H.P. Lovecraft"
    },
    {
        quote: "I've struggled a long time with survivin', but no matter what you have to find something to fight for",
        author: "Joel"
    },
    {
        quote: "YOU DIED",
        author: "Dark Souls"
    },
    {
        quote: "What is a man but the sum of his memories? We are the stories we live! The tales we tell ourselves!",
        author: "Clay Kaczmarek"
    },
    {
        quote: "War is where the young and stupid are tricked by the old and bitter into killing each other",
        author: "Niko Bellic"
    },
    {
        quote: "Nothing is true, everything is permitted",
        author: "Ezio Auditore"
    },
    {
        quote: "Requiescat in pace",
        author: "Ezio Auditore"
    }
];

window.onload = textOnLoad;
function textOnLoad() {
    generateRandomQuote();
}

function generateRandomQuote() {
    let quoteSize = listOfQuotes.length;
    let randomQuoteNumber = Math.floor(Math.random() * quoteSize)
    let randomQuoteResult = listOfQuotes[randomQuoteNumber]

    let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="
    
    let quoteRetweet = randomQuoteResult.quote.replace(/ /g, "%20");
    twitterLink += quoteRetweet

    let authorRetweet = randomQuoteResult.author.replace(/ /g, "%20");
    twitterLink += " - " + authorRetweet

    document.getElementById("tweet-quote").href = twitterLink;
    document.getElementById("text").innerText = randomQuoteResult.quote;
    document.getElementById("author").innerText = randomQuoteResult.author;
}