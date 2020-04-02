import React from 'react'
import './sign-in-and-sign-up.styles.scss'
import SignIn from '../sign-in/sign-in.component'
import SignUp from '../sign-up/sign-up.component'

const SignInSignOutPage = () => {
    return(
        <div className="sign-in-sign-up">
            <SignIn></SignIn>
            <SignUp></SignUp>
        </div>
    )
}

export default SignInSignOutPage;