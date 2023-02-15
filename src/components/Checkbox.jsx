import React, {Components} from "react";
//import { ReactPropTypes } from 'prop-types';

class Checkbox extends Components{
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