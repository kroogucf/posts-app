import React from 'react';

export default class ReportButton extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <button onClick={this.props.callback}><b>Report Post</b></button>            
        )
    }

}