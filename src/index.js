import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import People from './People';
import { people } from './peoplelist';
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
                <div>
                  <App />
                  <People name={people[0].name} gender={people[0].gender} height={people[0].height} />
                  <People name={people[1].name} gender={people[1].gender} height={people[1].height} />
                  <People name={people[2].name} gender={people[2].gender} height={people[2].height} />
                </div>
    , document.getElementById('root'));
registerServiceWorker();
