import React from 'react'
import CollectionItem from '../../components/collection-item/collection-item.component'
import {selectCollection} from '../../redux/shop/shop.selector'

import './collection.styles.scss'
import { connect } from 'react-redux'


const CollectionPage = ({collection , match}) =>{ 
    const {title, items} = collection;
    console.log(collection)
    return(
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item => <CollectionItem key={item.id} cartItems={item}/>)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) =>{
    return({
        collection: selectCollection(ownProps.match.params.categoryId)(state)
    })
}

export default connect(mapStateToProps)(CollectionPage)