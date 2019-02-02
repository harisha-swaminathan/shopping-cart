import React from 'react';
import LoggedInHeader from './LoggedInHeader';
import Header from './Header';
import ProductList from './ProductList';
import {storeProducts} from '../fixtures/products';
const DashboardPage = () => (
  <div className="container">
    <Header/>
      <ProductList products={storeProducts}/>
  </div>
);

export default DashboardPage;

