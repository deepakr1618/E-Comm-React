import React from 'react';
import {Route} from 'react-router-dom'

import CollectionPage from '../collection/collection.component'
import CollectionOverview from '../../components/collections-overview/collections-overview.component'

const ShopPage = ({match})=>{
    return (
            <div className="shop-page">
              <Route exact path={`${match.path}`} component={CollectionOverview}></Route>
              <Route path={`${match.path}/:categoryId`} component={CollectionPage}></Route>
            </div>
    );
}

export default ShopPage;
