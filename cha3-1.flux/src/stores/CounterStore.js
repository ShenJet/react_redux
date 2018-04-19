import AppDispatcher from '../AppDispatcher'
import * as ActionTypes from '../ActionTypes'
import {EventEmitter} from 'events'

const CHANGE_EVENT = 'changed'

const counterValues = {
    'Third': 30,
    'Second': 10,
    'First': 0
};

const CounterStore = Object.assign({}, EventEmitter.prototype, {
    getCounterValues:function () {
        console.log(counterValues)
        return counterValues
    },
    emitChange :function () {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener :function(cb) {
        this.on(CHANGE_EVENT, cb);
    },
    removeChangeListener :function (cb) {
        this.removeListener(CHANGE_EVENT, cb)
    }

})

// 最重要的步骤：
// 把CounterStore注册到全局唯一的dispatcher上去
CounterStore.dispatchToken = AppDispatcher.register(action => {
    console.log(action.type)
    if (action.type === ActionTypes.INCREMENT){
        counterValues[action.counterCaption]++;
        CounterStore.emitChange()
    } else if (action.type === ActionTypes.DECREMENT){
        counterValues[action.counterCaption]--;
        CounterStore.emitChange()
    }
})

export default CounterStore