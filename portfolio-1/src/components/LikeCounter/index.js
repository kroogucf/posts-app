import React from 'react';

export default class LikeCounter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            clicks: 0,
            show: true
        };
    }

    AddLike = () => {
        this.setState({ clicks: this.state.clicks + 1});
    }

    render() {
        return (
            <button>{this.state.clicks} Likes</button>
        )
    }




}