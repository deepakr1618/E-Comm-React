import React from 'react'
import {ReactComponent as ShoppingIcon} from "../../assets/cart.svg"
import {connect} from 'react-redux'
import './cart-icons.styles.scss'
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'


const CartIcon = ({toggleCartHidden, itemCount, ...otherProps}) => {
    return(
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return({
        toggleCartHidden : ()=>{dispatch(toggleCartHidden())}
    })
}

const mapStateToProps = createStructuredSelector({
    itemCount:selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);