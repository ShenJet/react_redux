import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import ClickCounter from './clickCounter';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <ClickCounter />,
    document.getElementById('root')
)
registerServiceWorker();
