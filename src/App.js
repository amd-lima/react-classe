import React, {useEffect, useState} from "react";
import './App.css';

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

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return(
    <>
      <div className="App">
        <p>{joke}</p>
      </div>
      
    </>
  )

}

export default App;