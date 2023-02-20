import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      joke: '',
    };
    
    this.fetchJoke = this.fetchJoke.bind(this);
  }

  componentDidMount() {
    this.fetchJoke();
   }
   
   fetchJoke() {
    const API_URL = 'https://icanhazdadjoke.com/';
    const REQUEST_CONFIG = { headers: { Accept: 'application/json' } };
    fetch(API_URL, REQUEST_CONFIG)
      .then((response) => response.json())
      .then(({ joke }) => this.setState({ joke }));
  }

  render() {
    const { joke } = this.state;

    return (
      <div className="App">
        <p>{joke}</p>
      </div>
    );
  }
}

export default App;



// import React, { Component } from 'react'
// import './App.css';
// import ValidEmail from './components/validEmail';

// class App extends Component {
//   constructor() {
//     super()

//     this.state = {
//       email: '',
//       savedEmail: ''
//     }
//   }

//   handleEmail = () => {
//     this.setState({
//       email: '',
//       savedEmail: this.state.email
//     })
//   }

//   handleInput = ({ target }) => {
//     this.setState({ email: target.value })
//   }

//   render(){
//   return (
//     <div className="App">
//       <label htmlFor='my-input'>
//         email
//         <input value={ this.state.email } onChange={ this.handleInput } id='my-input' type="email" />
//       </label>
//       <input onClick={ this.handleEmail } data-testid='enviar-email' type='button' value='enviar email' />
//       <button type='button'>
//         voltar pag anterior
//       </button>
//       <ValidEmail email={ this.state.savedEmail } />
      
//     </div>
//   )};
// }

// export default App;