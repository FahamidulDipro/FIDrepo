var quotes = [
    {
    name: "FID",
    quote:"I am awsome."
    },
    {
        name: "kam",
        quote:"I am not stupid."
     },
    {
    name: "mam",
    quote:"I am crazy."
    }

]

const quoteButton = document.querySelector('#btn');
const quote = document.querySelector('#quote');
const quoteAuthor = document.querySelector('#quoteAuthor');
quoteButton.addEventListener('click', quoteGenerator);

function quoteGenerator() {


    let random = Math.floor(Math.random()*quotes.length);
    quote.innerHTML = quotes[random].quote;
    quoteAuthor.innerHTML = quotes[random].name;
}


    