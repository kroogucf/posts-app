import React from 'react';
import ReportButton from '../ReportButton';

export default class FalconAndWinterSoldierPost extends React.Component {
    
    constructor(props) {
        super(props)
        this.post = {
            name: "What I want from Falcon and the Winter Soldier",
            article: "I want action",
        }
        this.state = {
            reported: false,
        };
    }

    reportArticle() {
        const currentState = this.state
        let newState = currentState
        newState.reported = true
        this.setState(newState)
    }

    render() {
        if (this.state.reported === true) {
            return (
                <div>
                    <div>
                        <h1>{this.post.name}</h1>
                    </div>
                    <div class="postbuttons">
                        <p class="reportedmessage">This article has been reported. It is pending review.</p>
                    </div>
                </div>
            )
        } else {
        return (
            <div>
                <div>
                    <h1>{this.post.name}</h1>
                </div>
                <div class="postbuttons">
                    <p>{this.post.article}</p>
                    <br></br>
                    <ReportButton callback={()=>{this.reportArticle()}} />
                </div>
            </div>
                )
        }
    }
}