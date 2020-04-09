import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/original.svg'
import {auth} from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'
import './header.styles.scss'

const Header = ({currentUser,hidden}, ...other) =>{
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
            <CartIcon></CartIcon>
            </div>
            {hidden ? <CartDropDown/> : null}
        </div>
    )
}

const mapStateToProps = ({ user:{currentUser}, cart:{hidden}}) =>{
    return({
        currentUser: currentUser,
        hidden: hidden
    })
}

export default connect(mapStateToProps)(Header)