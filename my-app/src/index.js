import React from 'react';
import ReactDOM from 'react-dom';
//import {BrowserRouter as Router} from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <HashRouter basename='/'>
        <App />
    </HashRouter>,
    document.getElementById('root'));
registerServiceWorker();
