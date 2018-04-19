import * as ActionTypes from './ActionTypes'
import AppDispatcher from './AppDispatcher'

// action对象必须有一个type属性，值为字符串类型
// action不自带方法，仅是纯粹的数据

export const increment = (counterCaption) => {
    console.log('increment dispatch')
    AppDispatcher.dispatch({
        type: ActionTypes.INCREMENT,
        counterCaption: counterCaption
    })
}

export const decrement = (counterCaption) => {
    console.log('decrement dispatch')
    AppDispatcher.dispatch({
        type: ActionTypes.DECREMENT,
        counterCaption: counterCaption
    })
}




