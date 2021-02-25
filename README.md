# Random quotes machine

Let's create a quotes machine class.

It should be possible to add a quote. Each quote should have:

- id
- quote text

and optionally:

- quote author.

## Functionality

If there is no author, use 'Anonymous'.
    
It should **not** be possible to add a quote without text.

It should be possible to get a random quote.

It should be possible to get the total count of all quotes.

It should be possible to get all quotes by a certain author.

## Quotes data

There is a data.js file, import this file in your main file, and use the data in there to populate the QuoteMachine with quotes.

QuoteMachine class should also live in a separate file.

If you feel importing is too complicated, then use only one file and copy paste the quotes data into it.

## Extra:

- Check if the quote already exits beforing adding it.
- Can you also add a category? If no category is specified, add the quote to unsorted.
- After adding a category - it should be possible to list the available categories, when listing the total of quotes. For example: I have 238 quotes, in categories: programming, life, inspiration.
- Improve the get random quote functionality, by specifying the category.
