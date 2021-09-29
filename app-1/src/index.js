import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'


const todoTitle = "Hello Everyone";
const dates = "28/09/2021";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

const allDate = dateName+"/ "+monthName+"/ "+currentYear;

const h6Style ={
  color:'white',
  fontSize:'25px',
  background:'gray',
  width:'12%',
  textAlign:'center',
  margin:'auto',
  padding:'15px',
  borderRadius:'8px'


}


ReactDOM.render(
  <div>
    <h1 style ={{color:'red', background:'gray',borderRadius:'10px',fontSize:'28px',padding:'10px',width:'10%',textAlign:'center',margin:'auto'}}>Todo app</h1>
    <h3 className="h3Style">Call family</h3>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, distinctio?</p>
    <h4 className="saifulCss">{todoTitle}</h4>
    <h5>{dates}</h5>
    <p>{dateName +"/" + monthName +"/" + currentYear}</p>
    <h6 style ={h6Style}>{allDate}</h6>

    <h2 className="h2style">Hey!! This is React js project</h2>


  </div>


  ,
  document.getElementById('root')
);


