import React from 'react'
import './collections-overview.styles.scss'
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

const CollectionsOverview = ({collections}) => {
    return(
        <div className="collections-overview">
            {
                collections.map((collection)=>{
                    const {id , ...otherProps} = collection
                    return(
                      <CollectionPreview key={id} {...otherProps}></CollectionPreview>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections:selectCollectionsForPreview
})
export default connect(mapStateToProps)(CollectionsOverview)