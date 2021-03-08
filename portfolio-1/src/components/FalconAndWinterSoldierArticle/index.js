import React from 'react';
import ReportButton from '../ReportButton';

export default class FalconAndWinterSoldierPost extends React.Component {
    
    constructor(props) {
        super(props)
        this.post = {
            name: "What I want from Falcon and the Winter Soldier",
            article: "Going into Falcon and the Winter Soldier I thought my opinion had been swayed toward normal 'Marvel action movie' after the first couple episodes of WandaVision. I thought this because of the pace that WandaVision had set being very different from normal Marvel projects and much slower and character driven story based. But now that WandaVision is over, I want more of that type of story. There was so much character development and twists and turns throughout the series, I would love to see that in Falcon and the Winter Soldier. While I do love my blow stuff up, out there typical Marvel projects, I feel like that could be saved more for the movie side of things especially after having seen WandaVision now.",
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