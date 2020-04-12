import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/original.svg'
import {createStructuredSelector} from 'reselect'

import {auth} from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {selectCartHidden} from '../../redux/cart/cart.selectors'

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
            {hidden ? null:<CartDropDown/> }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)