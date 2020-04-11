import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import {connect} from 'react-redux'
import CartItem from '../cart-item/cart-item.component'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import './cart-dropdown.styles.scss'

const CartDropDown = ({items}) =>{
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
            {items.map((item)=>{
                return(
                    <CartItem key={item.id} item={item}></CartItem>
                )
            })}
            </div>
            <CustomButton>Checkout</CustomButton>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return({
        items: selectCartItems(state)
    })
}
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(CartDropDown);