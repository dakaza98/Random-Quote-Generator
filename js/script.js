var quotes = [
  {quote: 'You can do anything but not everything', source: 'David Allen', citation: 'Making It All Work', year: '2009', tags: ['Inspirational', 'Life']},
  {quote: 'Be yourself; everyone else is already taken', source: 'Oscar Wilde', tags: ['Inspirational', 'Being yourself']},
  {quote: 'I changed my password everywhere to "incorrect." That way when I forget it, it always reminds me, "Your password is incorrect."', source: 'Anonymus', tags: ['Humor', 'Life Hacks']},
  {quote: "If I'm not back in five minutes, just wait longer.", source: 'Ace Ventura', citation: 'Ace Ventura: Pet Detective', year: '1994', tags: ['Humor','Movie Quote']},
  {quote: "If we die for them, Harry I'm going to kill you!", source: 'Ron Weasly', citation: 'Harry Potter and the deathly hallows Part 2', year: '2011', tags: ['Humor', 'Movie Quote']}
];
var usedQuotes = [];                      //usedQuotes contains the indexes of the quotes that have not been outputed to the page
var timeoutID;

function fillUsedQuotes(){
  for (var i = 0; i < quotes.length; i++)
    usedQuotes.push(i);                  //Each time usedQuotes is empty it gets refilled to
}

//Creates a random RGB value and returns rgb(value1, value2, value3)
function randomRGB(){
  var RGB = 'rgb(';
  for (var i = 0; i < 3; i++){
    RGB += Math.floor(Math.random() * 256);       //Creates a random value for each of the colors between and including 0 and 255

    if(i !== 2)
      RGB += ',';                                 //Adds a comma after the first two values

    else
      RGB += ')';                                //Ends the paranthesis
  }
  return RGB;
}

//Sets the background color to a random RGB value
function changeBackgroundColor(){
  document.body.style.backgroundColor = randomRGB();
}

//Selects a random quote from the quotes array and returns it
function getRandomQuote(){
  if(usedQuotes.length === 0)
    fillUsedQuotes();

  var randomQuoteIndex = usedQuotes.splice(Math.floor(Math.random() * usedQuotes.length), 1);
  var selectedQuote = quotes[randomQuoteIndex];
  console.log('index:', randomQuoteIndex[0], selectedQuote.quote)

  return selectedQuote;
}

//Creates the html code for the quote
function printQuote(){
  window.clearTimeout(timeoutID);

  var selectedQuote = getRandomQuote();
  var fullQuote = '<p class = "quote">' + selectedQuote.quote + '</p>';
  fullQuote += '<p class = "source">' + selectedQuote.source;

  if (selectedQuote.citation != null)                             //If there is no citation declared it wont be outputed
    fullQuote += '<span class = "citation">' + selectedQuote.citation + '</span>';

  if (selectedQuote.year != null)                                 //If there is no year declared it wont be outputed
    fullQuote += '<span class = "year">' + selectedQuote.year + '</span>';

  fullQuote += '</p>';

  changeBackgroundColor();                                        //Changes the background color
  document.getElementById('quote-box').innerHTML = fullQuote;     //Adds the quote to the page
  switchQuoteAfterTime();
}

function switchQuoteAfterTime(){
  timeoutID = window.setTimeout(printQuote, 10000);
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
