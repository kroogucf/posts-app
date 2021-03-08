import React from 'react';

export default class WandaQuotes extends React.Component {
 

    constructor(props) {
        super(props)

        let quotes = [
            `"But what is grief, if not love persevering?" - Vision`,
    
            `“Sometimes your dad and I aren’t on the same page, but that’s just temporary. Like the two of you, you might fight over toys, but he’s always going to be your brother. And he is always going to be yours. Because family is forever.” — Wanda`,
    
            `“I only remember feeling completely alone. Empty. I just… Endless nothingness.” — Wanda`,
    
            `“Boys... Thanks for choosing me to be your mom.” — Wanda`,
    
            `“I only remember feeling completely alone. Empty. I just… Endless nothingness.” — Wanda`,
    
            `“You, Vision, are the piece of the Mind Stone that lives in me. You are a body of wires and blood and bone that I created. You are my sadness and my hope. But mostly, you're my love.” — Wanda`,
            
            `“I have been a voice with no body. A body, but not human. And now a memory made real. Who knows what I might be next? We have said goodbye before, so it stands to reason-
            Wanda: We'll say hello again.” — Vision`,
        ]

        this.state = {
            quote: quotes[0].quote,
        }
    }

    randomQuote(quotes) {
        const randomQuote = Math.floor(Math.random() * quotes.length);
        return quotes[randomQuote];
    }


    render() {
        return (
            <div>
                <h3>
                    {this.randomQuote()}
                </h3>
            </div>
        )
    }

    
}