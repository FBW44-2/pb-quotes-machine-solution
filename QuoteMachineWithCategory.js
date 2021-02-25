class QuoteMachineWithCategory {
    constructor() {
        this.quotesList = [];
    }

    addQuote(text, author = 'Anonymous', category = 'unsorted') {
        let id = 1;

        if (this.quotesList.length) {
            id = this.quotesList[this.quotesList.length - 1].id + 1;
        }

        const duplicates = this.quotesList.filter((item) => {
            return item.text === text;
        });

        if (!duplicates.length) {
            this.quotesList.push({
                id,
                text,
                author,
                category,
            });
        }
    }

    getRandomQuote(category = '') {
        const quotesByCategory = this.quotesList.filter((quote) => quote.category === category);
        let quotesPool = quotesByCategory;

        if (!quotesByCategory.length || !category) {
            quotesPool = this.quotesList;
        }

        const randomIndex = Math.floor(Math.random() * quotesPool.length);
        const quote = quotesPool[randomIndex];

        return `\n${quote.text} \n- ${quote.author}\n`;
    }

    getTotalQuotesCount() {
        const categories = this.quotesList.reduce((acc, item) => {
            return {
                ...acc,
                [item.category]: item.category
            }
        }, {});
        return `\nI am the Quote Machine. I hold ${this.quotesList.length} quotes about ${Object.keys(categories).join(', ')}.\n`;
    }

    getQuoteById(id) {
        const quote = this.quotesList.filter((quote) => {
            return quote.id === id;
        });

        if (quote.length) {
            return quote[0];
        }

        return `Sorry, there is no quote with id ${id}`;
    }

    getQuotesByAuthorName(author) {
        const quotes = this.quotesList.filter((quote) => {
            return quote.author === author;
        });

        if (quotes.length) {
            return quotes.map((item) => item.text).join('\n\n');
        }

        return `Sorry, there is no quotes by author ${author}`;
    }
}

module.exports = QuoteMachineWithCategory;