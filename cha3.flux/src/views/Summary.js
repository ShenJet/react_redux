import React, { Component } from 'react'
import SummaryStore from '../stores/SummaryStore'

class Summary extends Component{
    constructor(props){
        super(props)
        this.onUpdate = this.onUpdate.bind(this)

        this.state = {
            sum: SummaryStore.getSummary()
        }
    }

    componentDidMount(){
        console.log('did Mount')
        SummaryStore.addChangeListener(this.onUpdate)
    }

    componentWillUnmount(){
        console.log('will unmount')
        SummaryStore.removeChangeListener(this.onUpdate)
    }

    onUpdate(){
        this.setState({
            sum:SummaryStore.getSummary()
        })
    }

    render(){
        return (
            <div>Total Count: {this.state.sum}</div>
        )
    }
}

export default Summary