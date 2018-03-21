import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import ClickCounter from './clickCounter';
import Test0 from './test0';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <ClickCounter />,
    document.getElementById('root')
)

ReactDOM.render(
    <Test0 />,
    document.getElementById('root1')
)
registerServiceWorker();
