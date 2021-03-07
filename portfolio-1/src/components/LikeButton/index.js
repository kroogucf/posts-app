import React from 'react';

export default class LikeButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = { liked: false }
    }

    render() {
        if (this.state.liked) {
            return "Thank you for liking!"
        }

        return (
            <div>
                <button onClick={() => this.setState({ liked: true })}>Like this Post</button>
            </div>
        )
    }
}