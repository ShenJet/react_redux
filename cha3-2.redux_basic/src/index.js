import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ControlPannel from './views/ControlPannel';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <ControlPannel />,
    document.getElementById('root')
);
registerServiceWorker();
