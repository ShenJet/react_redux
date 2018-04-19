import React, { Component } from 'react'
import PropTypes from 'prop-types';
import * as Actions from '../Action'
import CounterStore from '../stores/CounterStore'

const buttonStyle = {
    margin: '10px'
}

class Counter extends Component{
    constructor(props){
        console.log('constructor')

        super(props)
        console.log(props)
        this.onChange = this.onChange.bind(this)
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this)
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this)
        this.state = {
            count: CounterStore.getCounterValues()[props.caption]
        }
    }

    // 装载触发
    getInitialState(){
        console.log('getInitialState')
    }


    // 更新触发
    componentWillReceiveProps(nextProps){
        // 父组件传递props给子组件时触发
        console.log('componentWillReceiveProps')
        console.log(nextProps)
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate', nextProps)
        return (nextProps.caption !== this.props.caption) || (nextState.count !== this.state.count)
    }
    componentWillMount(){
        console.log('counter Will Mount')
    }
    componentDidMount(){
        console.log('counter DidMount')
        CounterStore.addChangeListener(this.onChange)
    }

    componentWillUnmount(){
        console.log('counter willUnmount')
        CounterStore.removeChangeListener(this.onChange)
    }

    onChange(){
        const newCount = CounterStore.getCounterValues()[this.props.caption]
        console.log('onChange', newCount)
        this.setState({count: newCount})
    }

    onClickIncrementButton(){
        Actions.increment(this.props.caption)
    }

    onClickDecrementButton(){
        Actions.decrement(this.props.caption)
    }

    render(){
        console.log('render now')
        const {caption} = this.props
        return (
            <div>
                <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
                <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
                <span>{caption} count: {this.state.count}</span>
            </div>
        )
    }
}

Counter.propTypes = {
    caption: PropTypes.string.isRequired
}


export default Counter