import React, { Component } from "react";
import PropTypes from 'prop-types';
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
            initVal:props.initVal
        }
    }

    minus(){
        console.log('-')
        // this.setState({
        //     initVal:this.state.initVal - 1
        // })
        this.updateCount(false)
    }

    plus(){
        console.log('+')
        // this.setState({
        //     initVal:this.state.initVal + 1
        // })
        this.updateCount(true)
    }

    updateCount(isPlus){
        const nowVal = this.state.initVal;
        const newVal = isPlus ? nowVal + 1 : nowVal - 1;
        this.setState({
            initVal : newVal
        })
        this.props.onUpdate(newVal, nowVal)
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

Counter.propTypes = {
    caption: PropTypes.string.isRequired,
    initVal: PropTypes.number,
    onUpdate: PropTypes.func
}

Counter.defaultProps = {
    initVal: 0,
    onUpdate: f => f //一个默认什么都不做的函数
}

export default Counter;