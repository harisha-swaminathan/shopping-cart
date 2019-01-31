import React from 'react';
import ProductItem from './ProductItem';
class ProductList extends React.Component {
    render() {
        
      return (
        <div className="container">
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

export default ProductList;