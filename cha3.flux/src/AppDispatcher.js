import { Dispatcher } from 'flux'

export default new Dispatcher()
// 实例化一个新对象，export出来即可

// 首先创建一个dispatcher，
// 一般一个应用只要一个
// dispatcher的作用就是派发不同的action
// 因此接下来还需定义一个action文件