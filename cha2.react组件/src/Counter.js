import React, { Component } from "react";

const style = {
    margin: '20px',
    background:"#00a7ff"
};

class Counter extends Component{


    constructor(props){
        super(props)
        console.log(props)
        this.minus = this.minus.bind(this)
        this.plus = this.plus.bind(this)
        this.state = {
            initVal:props.initVal || 0
        }
    }

    minus(){
        console.log('-')
        this.setState({
            initVal:this.state.initVal - 1
        })
    }
    plus(){
        console.log('+')
        this.setState({
            initVal:this.state.initVal + 1
        })
    }

    render(){
        console.log(this.props.caption)
        const {caption} = this.props//解构赋值
        return (
            <div>
                <button style={style} onClick={this.minus}> - </button>
                <span>{caption}:{this.state.initVal}</span>
                <button style={style} onClick={this.plus} > + </button>
            </div>
        )
    }


}

export default Counter;