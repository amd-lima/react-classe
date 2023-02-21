import React, {useEffect, useState} from "react";
import './App.css';
import Form from "./folders/Form";
import Page1 from "./folders/Page1";
import { Route, Routes } from "react-router-dom";

function App (){
  const [joke, setJoke] = useState('');

  useEffect(() => {
    const API_URL = 'https://icanhazdadjoke.com/';
    const REQUEST_CONFIG = { headers: { Accept: 'application/json' } };
    fetch(API_URL, REQUEST_CONFIG)
      .then((response) => response.json())
      .then(({joke}) => setJoke( joke ));
  },[]);


  //Async function
  
/*   useEffect(()=>{
    const API_URL = 'https://icanhazdadjoke.com/';
    const REQUEST_CONFIG = { headers: { Accept: 'application/json' } };
    async function fetchJoke(){
      const response = await fetch(API_URL, REQUEST_CONFIG);
      const {joke} = await response.json();
      setJoke(joke);
    };
    fetchJoke();
  },[]) */


  return(
    <>
      <div className="App">
        <p>{joke}</p>
      </div>
      <Routes>
        <Route path="/" element={<Form/>} />
        <Route path="/page1" element={<Page1/>} />
      </Routes>
    </>
  )

}

export default App;