import React from 'react';

import ReactDOM from 'react-dom';

// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const saiful = "call family";
const h2 = "this is my 2nd website"
const h3 ="this  is my 3rd website";

const h6 = <input type="date" />

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
console.log(dateTime)
document.write(dateTime)


ReactDOM.render(

<div>
<h1>This is my react web app</h1>
<h2>{h2}</h2> 
<h3>{h3}</h3>
<h5>{saiful}</h5>
<p>This is my 2nd website paragraph</p>
<strong>Hey Everyone</strong>

<br />
<h6>{h6}</h6>
<p>{new Date().getFullYear()}</p>


</div>,
 
  document.getElementById('root')
);

