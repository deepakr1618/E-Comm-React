import React from 'react'
import './checkout.styles.scss'
import CheckoutItem from '../checkout-item/checkout-item.component'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors'

const CheckoutPage = ({cartItems, total}) =>{
    return(
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Delete</span>
                </div>
            </div>
            {
                cartItems.map(cartItem=>
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>   
                )
            }
            <div className="total">
                <span>TOTAL : {total}$</span>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

const mapDispatchToProps = null


export default connect(mapStateToProps , mapDispatchToProps)(CheckoutPage)