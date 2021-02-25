const QuoteMachine = require('./QuoteMachine');
const data = require('./data');

// Create an instance of the class QuoteMachine
// We only need one instance
const qMachine = new QuoteMachine();

// Add all the quotes from the file
data.forEach((item) => {
    qMachine.addQuote(item.text, item.author);
});

// Get all quotes from Douglas Crockford
console.log(qMachine.getQuotesByAuthorName('Douglas Crockford'));
// Get all quotes from Martin Fowler
console.log(qMachine.getQuotesByAuthorName('Martin Fowler'));
// Get a random quote
console.log(qMachine.getRandomQuote());
// Get the total of quotes
console.log(qMachine.getTotalQuotesCount());