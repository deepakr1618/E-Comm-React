import React from 'react';
import './form-input.styles.scss'

const FormInput = ({handleChange , label , ...props}) => {
    return(
        <div className="group">
        <input type="text" className="form-input" onChange={handleChange} {...props}/>
        {
             label ? 
             (<label className={`form-input-label ${props.value.length ? 'shrink' : ''}`}>
             {label}   
             </label>) :
             null
        }
        </div>
    )
}

export default FormInput