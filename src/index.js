import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import Letter from './components/Letter';
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Letter bgcolor="#58B3FF">А</Letter>
    <Letter bgcolor="#FF605F">Е</Letter>
    <Letter bgcolor="#FFD52E">И</Letter>
    <Letter bgcolor="#49DD8E">О</Letter>
    <Letter bgcolor="#AE99FF">У</Letter>
    <hr></hr>
    <Letter bgcolor="PINK">Дианочка</Letter>
    <hr></hr>
    <Letter bgcolor="BLUE">Давидка</Letter>
    <hr></hr>
  </React.StrictMode>,
  document.querySelector('#root')
);

