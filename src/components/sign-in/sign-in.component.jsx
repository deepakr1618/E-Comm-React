import React from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:''
        }
    }
    handleSubmit = (event) =>{
        event.preventDefault()
    }

    handleChange = (event) =>{
        const {name , value} = event.target
        this.setState({[name]:value})
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" 
                    value={this.state.email}
                    onChange = { this.handleChange }
                    label="Email"
                    required
                    />
                    <FormInput 
                    type="password" 
                    name="password" 
                    value={this.state.password} 
                    onChange = {this.handleChange}
                    label="Password"
                    required/>
                    <div className="buttons">
                        <CustomButton type="submit">Submit</CustomButton>
                        <CustomButton isGoogleSignIn onClick={signInWithGoogle}>Google</CustomButton>
                    </div>
                </form>

            </div>
        )
    }
}


export default SignIn;