import './index.scss';
import 'font-awesome/css/font-awesome.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Spinner from './components/spinner';

ReactDOM.render(
    <>
        <App />
        <Spinner />        
    </>
    ,document.getElementById('root'));
