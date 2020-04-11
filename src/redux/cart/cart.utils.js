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