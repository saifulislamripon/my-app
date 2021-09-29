import React from 'react';

import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const saiful = "call family";
const h2 = "this is my 2nd website"
const h3 ="this  is my 3rd website";

const h6 = <input type="date" />

ReactDOM.render(
<div>
<h1>This is my react web app</h1>
<h2>{h2}</h2> 
<h3>{h3}</h3>
<h5>{saiful}</h5>
<p>This is my 2nd website paragraph</p>
<strong>Hey Everyone</strong>

<br />

<br />


</div>,
 
  document.getElementById('root')
);

