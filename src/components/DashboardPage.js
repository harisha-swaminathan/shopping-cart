import React from 'react';
import LoggedInHeader from './LoggedInHeader'
import ProductList from './ProductList';
import {storeProducts} from '../fixtures/products';
const DashboardPage = () => (
  <div>
    <LoggedInHeader/>
      <ProductList products={storeProducts}/>
  </div>
);

export default DashboardPage;

