import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CounterPannel from './views/CounterPannel';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CounterPannel />, document.getElementById('root'));
registerServiceWorker();
