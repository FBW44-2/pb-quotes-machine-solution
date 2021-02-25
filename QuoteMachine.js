class QuoteMachine {
    constructor() {
        this.quotesList = [];
    }

    addQuote(text, author) {
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
                author: author ? author : 'Anonymous',
            });
        }
    }

    getRandomQuote() {
        const randomIndex = Math.ceil(Math.random() * (this.quotesList.length - 0) + 0);
        const quote = this.quotesList[randomIndex];

        return `\n${quote.text} \n- ${quote.author}\n`;
    }

    getTotalQuotesCount() {
        return `\nHey, I am the Quote Machine. I hold ${this.quotesList.length} quotes about programming.\n`;
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

module.exports = QuoteMachine;