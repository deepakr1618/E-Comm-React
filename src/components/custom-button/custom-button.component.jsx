import React from 'react'

import './custom-button.styles.scss'


export default function CustomButton({children, isGoogleSignIn, inverted, ...props}){
    return(
        <button 
            className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...props}>
                {children}
        </button>
    )
}