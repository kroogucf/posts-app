import React from 'react';
import WandaVisionPost from './components/WandaVisionPost';
import FalconAndWinterSoldierPost from './components/FalconAndWinterSoldierPost';
import LikeButton from './components/LikeButton';


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
         <ul style={{ listStyle: 'none' }}>
            <li><button onClick={()=>{this.SetScreen("WVP")}}>WandaVision Post</button></li>
            <li><button onClick={()=>{this.SetScreen("FAWSP")}}>Falcon And WinterSoldier Post</button></li>
        </ul>
       </div>
     )
   } else if (this.state.screen === "WVP") {
    return (
      <div>
        < WandaVisionPost/>
       <button onClick={()=>{this.SetScreen("NONE")}}>Return to Menu</button>
      </div>
     )
   } else if (this.state.screen === "FAWSP") {
    return (
      <div>
        < FalconAndWinterSoldierPost/>
       <button onClick={()=>{this.SetScreen("NONE")}}>Return to Menu</button>
      </div>
     )
    
  }
}
}
export default class App extends React.Component {
render() {return (<ChosePost />)}
}