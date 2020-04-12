import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import {connect} from 'react-redux'
import CartItem from '../cart-item/cart-item.component'
import './cart-dropdown.styles.scss'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'
import { withRouter } from 'react-router-dom'
import {toggleCartHidden} from '../../redux/cart/cart.actions'

const CartDropDown = ({items , history , dispatch}) =>{
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
            {
            items.length?
            items.map((cartItem)=>{
                return(
                    <CartItem key={cartItem.id} item={cartItem}></CartItem>
                )
            })
            :<span className="empty-cart">No items in cart!</span>
            
            }
            </div>
            <CustomButton onClick={()=>{
                dispatch(toggleCartHidden())
                history.push("/checkout")
                
                }}>Checkout</CustomButton>
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    items: selectCartItems
})


export default withRouter(connect(mapStateToProps)(CartDropDown));