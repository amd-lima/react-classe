import React, {Component} from 'react'
import { ReactPropTypes } from 'prop-types';

class SelectFields extends Component{
   render(){
      const {handleChange} = this.props;
      return(
         <select onChange={handleChange} name='carsTypes'>
            <option value='Volvo'>Volvo</option>
            <option value='Saab'>Saab</option>
            <option value='BMW'>BMW</option>
            <option value='Audi'>Audi</option>
         </select>
      )
   }
}

export default SelectFields;
