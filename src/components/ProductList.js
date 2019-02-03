import React from 'react';
import ProductItem from './ProductItem';
import { connect } from 'react-redux';
import filterProducts from '../selectors/Products';
import {storeProducts} from '../fixtures/products';
class ProductList extends React.Component {
    render() {
        
      return (
        <div >
        <div className="eachprod">
        {
            this.props.products.map((prod)=>(
                <ProductItem key={prod.pid} product={prod}/>
            ))
        }
        </div>
        </div>
      );
    }
  };
  const mapStateToProps = (state) => {
    return {
      products: filterProducts(storeProducts, state.filters)
    };
  };
  
  export default connect(mapStateToProps)(ProductList);
