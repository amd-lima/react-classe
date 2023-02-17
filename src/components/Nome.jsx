import React, {Component} from 'react'
//import { ReactPropTypes } from 'prop-types';

class Nome extends Component{
   render(){
      const {handleChange, value} = this.props;
      return(
         <input 
            onChange={handleChange} 
            name='nome' 
            type='text' 
            value={value} 
         />
      )
   }

}

export default Nome;
