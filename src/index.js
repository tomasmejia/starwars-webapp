import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import People from './People';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
                <div>
        <App />
        <People />
        <People />
                </div>
    , document.getElementById('root'));
registerServiceWorker();
