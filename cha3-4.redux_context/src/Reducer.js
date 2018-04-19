import * as ActionTypes from './ActionTypes'

export default (state, action) => {
    const {counterCaption} = action

    switch (action.type) {
        case ActionTypes.INCREMENT:
            return {...state, [counterCaption]: state[counterCaption] + 1}
        case ActionTypes.DECREMENT:
            return {...state, [counterCaption]: state[counterCaption] - 1}
        default:
            return state
    }

}

// return {...state, [counterCaption]: state[counterCaption] + 1}
// 这段代码等同于：
// const newState = Object.assign({}, state)
// newState[counterCaption] ++
// return newState