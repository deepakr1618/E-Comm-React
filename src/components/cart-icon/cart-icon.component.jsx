import React from 'react'
import {ReactComponent as ShoppingIcon} from "../../assets/cart.svg"
import {connect} from 'react-redux'
import './cart-icons.styles.scss'
import toggleCartHidden from '../../redux/cart/cart.actions'


const CartIcon = ({toggleCartHidden} , ...otherProps) => {
    return(
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return({
        toggleCartHidden : ()=>{dispatch(toggleCartHidden())}
    })
}

export default connect(null, mapDispatchToProps)(CartIcon);