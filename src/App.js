import './App.css';
import React, {Component} from 'react';
import { Aniversario, Checkbox, Idade, Nome, SelectFields } from './components';
import Api from './components/Api';



class App extends Component{
  
    state = {
      isValid: false,
      idade: '',
      nome:'',
      aniversario: '',
      carsTypes: 'volvo',
    };
  
  
  
  handleChange = ({target}) =>{
    const {name, type} = target;
    const value = type === 'checkbox'? target.checked : target.value;
    this.setState({
      [name]:value
    })
  }
 
  render(){   
    return(
      <>
        <form>
          <Checkbox handleChange={this.handleChange} />
          <Idade value={this.state.idade} handleChange={this.handleChange}/>
          <Nome value={this.state.nome} handleChange={this.handleChange}/>
          <Aniversario value={this.state.aniversario} handleChange={this.handleChange}/>
          <SelectFields handleChange={this.handleChange} />
        </form>
        <Api />        
      </>
    )
  }
}


export default App;

/*
  constructor(){
    super()
    this.state = {
      counter: 0
    };
  }

  handleClick = () =>{
    this.setState(((prev, _props) => {
      counter: prev.counter + 1;
    }))
  }
  render(){
    return(
      <>
        <button onClick={this.handleClick}>contador</button>
        <h1>O contador está em {this.state.counter}</h1>
      
      </>
    )
  }

*/