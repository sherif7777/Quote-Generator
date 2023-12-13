function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var quoteTextP = document.getElementById("quoteText");
var authorP = document.getElementById("author");

var myQuotes = [
  {
    quoteText:
      "“A friend is someone who knows all about you and still loves you.”",
    author: "― Elbert Hubbard",
  },
  {
    quoteText:
      "“To live is the rarest thing in the world. Most people exist, that is all.”",
    author: "― Oscar Wilde",
  },
  {
    quoteText:
      "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    author: "― Mahatma Gandhi",
  },
  {
    quoteText: "“We accept the love we think we deserve.”",
    author: "― Stephen Chbosky",
  },
  {
    quoteText: "“Without music, life would be a mistake.”",
    author: "― Friedrich Nietzsche",
  },
];

var priviousNum, randomNum;

function uniqeRandomNumber() {
  do {
    randomNum = getRandomNumber(0, 4);
  } while (randomNum == priviousNum);

  priviousNum = randomNum;

  return randomNum;
}

function GenerateQuote() {
  var random = uniqeRandomNumber();

  quoteTextP.innerHTML = myQuotes[random].quoteText;

  authorP.innerHTML = myQuotes[random].author;
}
