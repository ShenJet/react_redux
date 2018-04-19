import { createStore } from 'redux'
import reducer from './Reducer'

const initVal = {
    "First": 0,
    "Second": 10,
    "Third": 30
}

const store = createStore(reducer, initVal)

export default store