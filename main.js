var philosophyQuotes = [
  '"The unexamined life is not worth living." - Socrates',
  '"Life must be understood backward. But it must be lived forward." - Søren Kierkegaard',
  '"Whereof one cannot speak, thereof one must be silent." - Ludwig Wittgenstein',
];

var scienceQuotes = [
  '"The good thing about science is that it\'s true whether or not you believe in it." - Neil deGrasse Tyson',
  '"Science is a way of thinking much more than it is a body of knowledge." - Carl Sagan',
  "“I’m sure the universe is full of intelligent life. It’s just been too intelligent to come here.” – Arthur C. Clarke ",
  "\"The most exciting phrase to hear in science, the one that heralds new discoveries, is not 'Eureka!' but 'That's funny...'\" - Isaac Asimov",
];
var loveQuotes= [
  '“Loved you yesterday, love you still, always have, always will.” – Elaine Davis',
  '“I need you like a heart needs a beat.” – One Republic',
  '“If I know what love is, it is because of you.” – Hermann Hesse',
  '”Women are meant to be loved, not to be understood.” – Oscar Wilde',
  '“You make me want to be a better man.” – Melvin Udall'
  ];
  
  var techQuotes = [
    '“Technology is best when it brings people together. - Matt Mullenweg”', 
    '“The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past. - Tim Berners-Lee”',
    ' “Once a new technology rolls over you, if youre not part of the steamroller, youre part of the road.”  -Stewart Brand'
  ];
var categoryDropdown = document.getElementById("category");
var quoteDisplay = document.getElementById("quoteDisplay");

var arr = [];
var currentIndex = -1;
function getRandomQuote() {
  var allQuotes = scienceQuotes.concat(philosophyQuotes).concat(loveQuotes).concat(techQuotes);
  var randomIndex = Math.floor(Math.random() * allQuotes.length);
  return allQuotes[randomIndex];
}
selectedQuote = getRandomQuote();
// arr[currentIndex++] = selectedQuote;
quoteDisplay.textContent = selectedQuote;
function newQuote() {
  var selectedCategory = categoryDropdown.value;
  var selectedQuote;

  if (selectedCategory === "") {
    selectedQuote = getRandomQuote();
    currentIndex++;
    arr[currentIndex] = selectedQuote;
  } else {
    var selectedArray =
      selectedCategory === "science" ? scienceQuotes :selectedCategory === "philosophy"? philosophyQuotes:
      selectedCategory === "love" ? loveQuotes :techQuotes;
    var randomIndex = Math.floor(Math.random() * selectedArray.length);
    selectedQuote = selectedArray[randomIndex];
    currentIndex++;
    arr[currentIndex] = selectedQuote;
  }

  quoteDisplay.textContent = selectedQuote;
}

function previousQuote() {
 


  if (currentIndex > 0) {
    currentIndex--;
    selectedQuote = arr[currentIndex];
    quoteDisplay.textContent = selectedQuote;
  }
 
    else if (currentIndex === 0) {
      currentIndex = 0; // Set currentIndex to -1 to prevent further decrease
      quoteDisplay.textContent = arr[0];
    }
  

 
}

function nextQuote() {
  var max = arr.length;
  currentIndex++;
  if (currentIndex<=max-1) {
    selectedQuote = arr[currentIndex];
    quoteDisplay.textContent = selectedQuote;
  } 
  else{
    currentIndex=max-1;
  }
  
}

var previousButton = document.getElementById("prv");
var nextButton = document.getElementById("nxt");

previousButton.addEventListener("click", previousQuote);

nextButton.addEventListener("click", nextQuote);

