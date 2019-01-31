import React from 'react';
import Header from './Header';
import { DateRangePicker } from 'react-dates';
import ProductList from './ProductList';
import {storeProducts} from '../fixtures/products';
console.log(storeProducts);
const ProductsPage=()=>(
    <div className="container">
        <Header/>
       

        <h1>Page with the products</h1>
        <ProductList products={storeProducts}/>
    </div>
);

  export default ProductsPage;

