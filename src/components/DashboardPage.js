import React from 'react';
import Header from './Header';
import ProductFilter from './ProductFilter';
import ProductList from './ProductList';
import {storeProducts} from '../fixtures/products';
const DashboardPage = () => (
  <div className="container">
    <Header/>
    <ProductFilter/>
      <ProductList products={storeProducts}/>
  </div>
);

export default DashboardPage;

