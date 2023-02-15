import React, {Component} from "react";
//import { ReactPropTypes } from 'prop-types';

class Checkbox extends Component{
    render(){
        const {handleChange} = this.props;
        return(
            <label>
                Digite uma cidade
                <input 
                    onClick={handleChange} 
                    name='isValid' 
                    type='checkbox' 
                />
            </label>
        )
    }
}
export default Checkbox;