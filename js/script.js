var quotes = [
  {quote: 'You can do anything but not everything', source: 'David Allen', citation: 'Making It All Work', year: '2009', tags: ['Inspirational', 'Life']},
  {quote: 'Be yourself; everyone else is already taken', source: 'Oscar Wilde', tags: ['Inspirational', 'Being yourself']},
  {quote: 'I changed my password everywhere to "incorrect." That way when I forget it, it always reminds me, "Your password is incorrect."', source: 'Anonymus', tags: ['Humor', 'Life Hacks']},
  {quote: "If I'm not back in five minutes, just wait longer.", source: 'Ace Ventura', citation: 'Ace Ventura: Pet Detective', year: '1994', tags: ['Humor','Movie Quote']},
  {quote: "If we die for them, Harry I'm going to kill you!", source: 'Ron Weasly', citation: 'Harry Potter and the deathly hallows Part 2', year: '2011', tags: ['Humor', 'Movie Quote']}
];

//Selects a random quote from the quotes array and returns it
function getRandomQuote(){
  var randomQuoteIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuoteIndex];
}

function printQuote(){
  var selectedQuote = getRandomQuote();

  var fullQuote = '<p class = "quote">' + selectedQuote.quote + '</p>';
  fullQuote += '<p class = "source">' + selectedQuote.source;

  if (selectedQuote.citation !== null)
    fullQuote += '<span class = "citation">' + selectedQuote.citation + '</span>';

  if (selectedQuote.year !== null)
    fullQuote += '<span class = "year">' + selectedQuote.year + '</span>';

  fullQuote += '</p>';

  document.getElementById('quote-box').innerHTML = fullQuote;
}
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
