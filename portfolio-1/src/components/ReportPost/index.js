import React from 'react';

export default class ReportPost extends React.Component {
    
    constructor(props) {
        super(props)
        this.post = {
            name: "Guide to Proper Cat-girl Care",
            article: "As previously mentioned, your Cat-girl is a remarkably neat and clean creature, but even that being the case, she will require regular bathing. If she is a sedentary breed she may only require a weekly bath. More active brees that energetically play and sweat may require almost daily bathing. Again, we cannot stress enough that you use S.P.C.G.A. approved bathing products. Cat-girls have no real body hair except for the head/ears and tail. Thus their skin is vulnerable to strong soaps which may cause itch and painful irritation.",
        }
        this.state = {
            reported: false,
        };
    }

    render() {
        if (this.state.reported === true) {
            return (
                <div>
                    <p>This article has been reported. It is pending review.</p>
                </div>
            )
        } else {
        return (
                <div>
                    <h1>{this.post.name}</h1>
                    <p>{this/this.post.article}</p>
                </div>
                )
        }
    }
}