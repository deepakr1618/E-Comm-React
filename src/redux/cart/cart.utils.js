export const addItemToCart = (cartItems , newItem) => {
    const existingCartItems = cartItems.find(item=>item.id === newItem.id)
    if(existingCartItems){
        return cartItems.map((item)=>{
            if(item.id === newItem.id){
                return({...item , quantity:item.quantity+1})
            } 
            return (item)
        })
    }
    else{
        return [...cartItems , {...newItem , quantity:1}]
    }
}

export const removeItemFromCart = (cartItems , itemToRemove) => {
    const existing = cartItems.find(i=>i.id === itemToRemove.id)
    if(existing.quantity === 1){
        return cartItems.filter((item) => item.id!==itemToRemove.id)
    }
    return cartItems.map(cartItem => {
        return(
            cartItem.id===itemToRemove.id?
                {...cartItem , quantity: cartItem.quantity-1}:
                cartItem
        )
    })
}