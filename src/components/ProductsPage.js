import React from 'react';
import Header from './Header';
import ProductList from './ProductList';
import {storeProducts} from '../fixtures/products';
console.log(storeProducts);
const ProductsPage=()=>(
    <div className="container">
        <Header/>
        <div className="eachprod">
        <ProductList products={storeProducts}/>
        </div>
    </div>
);

  export default ProductsPage;

