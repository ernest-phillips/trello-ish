import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board'; // Imported the Board component
import './index.css';

ReactDOM.render( <Board/> , // Rendered the Board component
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();