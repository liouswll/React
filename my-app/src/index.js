import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import registerServiceWorker from './registerServiceWorker';
import './To.css'

ReactDOM.render(<TodoList/>, document.getElementById('root'));
registerServiceWorker();
