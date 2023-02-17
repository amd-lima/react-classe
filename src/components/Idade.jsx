import React, {Component} from 'react'
//import { ReactPropTypes } from 'prop-types';

class Idade extends Component{
   render(){
   const {handleChange, value} = this.props;
      return(
         <input 
            onChange={handleChange} 
            name='idade' 
            type='number' 
            value={value}
         />
      )
   }
}

export default Idade;
