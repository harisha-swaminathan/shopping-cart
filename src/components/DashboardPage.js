import React from 'react';
import LoggedInHeader from './LoggedInHeader'
import ProductList from './ProductList';
import {storeProducts} from '../fixtures/products';
const DashboardPage = () => (
  <div>
    <LoggedInHeader/>
      <h1>shows same product page with different Header</h1>
      <ProductList products={storeProducts}/>
  </div>
);

export default DashboardPage;

