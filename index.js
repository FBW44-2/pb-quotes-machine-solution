const QuoteMachine = require('./QuoteMachine');
const QuoteMachineWithCategory = require('./QuoteMachineWithCategory');
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

// Create another instance
const qMachineWithCategory = new QuoteMachineWithCategory();
// Add all the quotes from the file
data.forEach((item) => {
    qMachineWithCategory.addQuote(item.text, item.author);
});
qMachineWithCategory.addQuote('Don\'t be pushed around by the fears in your mind.Be led by the dreams in your heart.', 'Roy T.Bennett', 'motivation');
qMachineWithCategory.addQuote('Curiosity is the engine of achievement.', 'Ken Robinson', 'motivation');
// Get the total of quotes
console.log(qMachineWithCategory.getTotalQuotesCount());
// Get all quotes from Douglas Crockford
console.log(qMachineWithCategory.getQuotesByAuthorName('Douglas Crockford'));
// Get a random quote from specific category
console.log(qMachineWithCategory.getRandomQuote('motivation'));
// Get a random quote from any category
console.log(qMachineWithCategory.getRandomQuote());