import React from 'react';

export default class ReportButton extends React.Component {

    constructor(props) {
        super(props)
        this.props.buttonTitle = "Report Post"
    }

    render() {
        return(
            <button onClick={this.props.callback}><b>{this.props.buttonTitle}</b></button>            
        )
    }

}