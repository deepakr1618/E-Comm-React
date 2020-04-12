import { createSelector } from 'reselect'

const selectCart = state => state.cart


export const selectCartItems  = createSelector(
    [selectCart],
    (cart)=> cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems)=>cartItems.reduce((acc, {quantity})=>acc+quantity,0)
)

export const selectCartHidden = createSelector(
    [selectCart],
    (cart)=>cart.hidden
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cart)=> cart.reduce((acc , pres)=>acc+(pres.quantity*pres.price),0)
)