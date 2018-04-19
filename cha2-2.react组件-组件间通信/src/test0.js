import React, { Component } from 'react';

class Test0 extends Component {
    constructor(props) {
        super(props)
        this.passCount = this.passCount.bind(this)
        this.state = {
          count:0
        }
    }
    passCount(){
        this.setState({
            count:this.state.count + 1
        })
    }

    render(){
        const style = {
            width:"200px",
            height:"100px",
            background:"yellowgreen"
        }

        return (
            <div style={style} onMouseOver={this.passCount}>pass me:{this.state.count}</div>
        )
    }
}
export default Test0;