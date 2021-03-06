import React from 'react'
import './collection-item.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import {connect} from 'react-redux'
import {addItemToCart} from '../../redux/cart/cart.actions'
import AddShoppingCartRoundedIcon from '@material-ui/icons/AddShoppingCartRounded';

const CollectionItem =  ({ cartItems, addItemDispatch }) =>{
    const { name, price, imageUrl} = cartItems
    return(
        <div className="collection-item">
        <div
            className="image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className="collection-footer">
            <span className="name">
                {name}
            </span>
            <span className="price">
                {price}
            </span>
        </div>
        <CustomButton inverted onClick={()=>{addItemDispatch(cartItems)}}> Add to Cart
        <AddShoppingCartRoundedIcon
        style={{
            marginLeft:"10px",
            transform: "scale(0.9)"
        }}></AddShoppingCartRoundedIcon>
        </CustomButton>
    </div>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = (dispatch) => ({
    addItemDispatch : item => {
        return (dispatch(addItemToCart(item)))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CollectionItem);