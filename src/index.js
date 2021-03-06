// {Component} brought in as a property of react
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main';
import {BrowserRouter} from 'react-router-dom';
import './styles/stylesheet.css';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();