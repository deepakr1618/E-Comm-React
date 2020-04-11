import React from 'react'
import './collection-item.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import {connect} from 'react-redux'
import {addItemToCart} from '../../redux/cart/cart.actions'

const CollectionItem =  ({ item, addItemDispatch }) =>{
    console.log(item)
    const { name, price, imageUrl} = item
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
        <CustomButton inverted onClick={()=>{addItemDispatch(item)}}> Add to Cart</CustomButton>
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