import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/original.svg'
import {auth} from '../../firebase/firebase.utils'
import './header.styles.scss'

const Header = ({currentUser, ...other}) =>{
    return(
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo"></Logo>
            </Link>
            <div className="options">
                <Link to="/shop" className="option">
                    SHOP
                </Link>
                <Link to="/shop" className="option">
                    CONTACT
                </Link>
                { currentUser ? 
                    <div className="option"
                    onClick = {()=>{auth.signOut()}}
                    >
                        SIGN OUT
                    </div>:
                    <Link to="/signin" className="option">
                    SIGN IN
                    </Link>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return({
        currentUser: state.user.currentUser
    })
}

export default connect(mapStateToProps)(Header)