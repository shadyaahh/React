import React, { Component } from 'react';
// import '../class-components/Counter_homework.css'

export default class Counter2 extends Component {

    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }

    decrement = () => {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 });
        }
        if (this.state.count <= 0) {
            alert('hello gooys');
        }
    }

    render() {
        return (
            <div>
                <h2>Count: {this.state.count}</h2>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        );
    }
}