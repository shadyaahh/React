import React, { Component } from 'react'

export default class Counter extends Component {
    // step1: initialize state
    constructor(props) {
        super(props);//used to invoke parent component
        this.state = { count: 0 };
    }

    //step2: motherds to modify state

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }

    decrement = () => {
        this.setState({ count: this.state.count - 1 });
    }
   //step3: redurn
    render() {
        return (
            <div>
             <h2>count: {this.state.count}</h2>
             <button onClick={this.increment}>+</button>
             <button onClick={this.decrement}>-</button>


            </div>
        )
    }
}
