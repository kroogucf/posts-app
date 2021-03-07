import React from 'react';

class PostScreen extends React.Component{
  constructor(props)
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
          <h1>Select Post</h1>
          <ul style></ul>
        </div>
      )
    }
  }

export default class App extends React.Component
