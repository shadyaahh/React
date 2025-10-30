import React, { Component } from 'react'

export default class Mounting extends Component {
    ComponentDidMount() {//life cycle method, which is automatically called whwn the component mount
    console.log("component mounted!");
    
    }
  render() {
    return <p>Component has been mounted!</p>
    
  }
}
