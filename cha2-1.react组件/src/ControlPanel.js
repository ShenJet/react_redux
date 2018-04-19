import React, { Component } from "react";
import Counter from "./Counter";

class ControlPanel extends Component{

    render(){
        return (
            <div>
                <Counter caption={'1st'} initVal={10}></Counter>
                <Counter caption={'2nd'} initVal={20}></Counter>
                <Counter caption={'3trd'} initVal={30}></Counter>
            </div>
        )
    }
}

export default ControlPanel;