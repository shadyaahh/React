import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
    };
    this.timer = null;
  }

  componentDidMount() {
    console.log("Timer mounted");
    this.timer = setInterval(() => {
      this.setState((prevState) => ({ time: prevState.time + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    console.log("Clearing interval...");
    clearInterval(this.timer);
    console.log("Component will unmount, interval cleared ✅");
  }

  render() {
    return (
      <div>
        <h2>Time: {this.state.time}</h2>
      </div>
    );
  }
}

export default Timer;