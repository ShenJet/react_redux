import React, { Component } from "react";
import Counter from "./Counter";

class ControlPanel extends Component{
    constructor(props){
        super(props)
        this.onCounterUpdate = this.onCounterUpdate.bind(this);
        this.initVals = [10, 20, 30];
        const initSum = this.initVals.reduce((a, b) => a + b, 0) ;
        this.state = {
            sum: initSum
        }
    }

    onCounterUpdate(newVal, old) {
        const valChange = newVal - old;
        this.setState({
            sum : this.state.sum + valChange
        })
    }

    render(){
        return (
            <div>
                <Counter onUpdate={this.onCounterUpdate} caption={'1st'} initVal={this.initVals[0]}></Counter>
                <Counter onUpdate={this.onCounterUpdate} caption={'2nd'} initVal={this.initVals[1]}></Counter>
                <Counter onUpdate={this.onCounterUpdate} caption={'3trd'} initVal={this.initVals[2]}></Counter>
                <hr/>
                <div>Total count: {this.state.sum}</div>
            </div>
        )
    }
}

export default ControlPanel;