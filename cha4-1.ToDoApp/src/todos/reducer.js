import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes';

export default (state = [], action) => {
    switch (action.type){
        case ADD_TODO:
            return [
            {
                id:action.id,
                text:action.text,
                completed:false
            },
                // 此处使用了扩展运算符
                // ...state就是相当于把state内的元素都包进来
                ...state
            ]
        case TOGGLE_TODO:
            return state.map(todoItem=>{
                if(todoItem.id === action.id){
                    // 此处使用了扩展运算符
                    // 等同于：
                    // let newItem = todoItem
                    // newItem.completed = !newItem.completed
                    // return newItem
                    // 这样做的好处是不会对传入的参数todoItem本身产生副作用
                    return {...todoItem, completed: !todoItem.completed}
                }else{
                    return todoItem
                }
            })
        case REMOVE_TODO:
            // Array.filter() 过滤出数组中满足某些条件的项
            return state.filter(todoItem => {
                return todoItem.id !== action.id
            })
        default:
            return state
    }
}