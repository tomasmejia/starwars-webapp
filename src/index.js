import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import People from './People';
import PeopleList from './PeopleList';
import { chars } from './chars';
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
                <div>
                  <App />
                  <PeopleList chars={chars} />
                </div>
    , document.getElementById('root'));
registerServiceWorker();
