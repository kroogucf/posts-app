import React, { useState } from 'react';

export default class ReportPost extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            name: "FalconArticle"
        };
    }

    render() {
        const { reportFalconArticle } = this.props;
        return <>{reportFalconArticle && <div>HERE FALCON ARTICLE</div>}</>
    }
}