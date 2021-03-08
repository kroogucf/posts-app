import React from 'react';
import WandaVisionPost from './components/WandaVisionPost';
import WandaQuotes from './components/WandaQuotes';
import LikeCounter from './components/LikeCounter';
import FalconAndWinterSoldierPost from './components/FalconAndWinterSoldierArticle';


class ChosePost extends React.Component{
  constructor(props) {
  super(props)
  this.state = {screen:"NONE"}
  }

SetScreen(name) {
  this.setState({
    screen: name
  })
}
  render() {
   if (this.state.screen === "NONE") {
     return (
       <div>
         <h1>Chose a Post</h1>
         <div class="postbuttons">
         <ul style={{ listStyle: 'none' }}>
            <li><button class="wandabutton" onClick={()=>{this.SetScreen("WVP")}}>WandaVision Post</button></li>
            <li><button class="falconbutton" onClick={()=>{this.SetScreen("FAWSP")}}>Falcon And WinterSoldier Post</button></li>
        </ul>
        </div>
       </div>
     )
   } else if (this.state.screen === "WVP") {
    return (
      <div>
        < WandaVisionPost/>
        < LikeCounter/>
        < WandaQuotes/>
       <button onClick={()=>{this.SetScreen("NONE")}}>Return to view other posts</button>
      </div>
     )
   } else if (this.state.screen === "FAWSP") {
    return (
      <div>
        < FalconAndWinterSoldierPost/>
        < LikeCounter/>
       <button onClick={()=>{this.SetScreen("NONE")}}>Return to view other posts</button>
      </div>
     )
    
  }
}
}
export default class App extends React.Component {
render() {return (<ChosePost />)}
}