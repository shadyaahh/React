import React, { Component } from 'react'

export default class Updating extends Component {

    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }

    componentDidUpdate(prevState) {//prevstate is the props and state of the component before the update
        if (prevState.count !== this.state.count) {
            console.log(`componet updated! New counnt: ${this.state.count}`);

        }
    }
    render() {
        return (
            <div>
                <h1>count:{this.state.count}</h1> <br />
                <button onClick={this.increment}>Increment</button>
            </div>
        )
    }
}
