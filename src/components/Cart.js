import React from 'react';
import { connect } from 'react-redux';
import ProductsInCart from './ProductsInCart';
import TotalSummary from './TotalSummary';
import Header from './Header';
export const Cart = (props) => (
   <div >
     <Header/>
    <div className="container"> 
    <h1>Summary</h1>
    <div className="list-header">
    <div className="visible-desktop">Product</div>
    <div className="visible-desktop">Quantity</div>
    <div className="visible-desktop">Remove</div>
    <div className="visible-desktop">Price</div>
    </div>
    
  <div className="list-bottom">
    {
      props.products.length === 0 ? (
        <div> 
          <span className=" list-item list-item--empty">
           No Products in cart
          </span>
        </div>
      ) : (
          props.products.map((product) => {
            return <ProductsInCart key={product.pid} {...product} />;
          })
        )
    }
    <div className="summary-heading">
    <h3 >Total</h3>
    <TotalSummary/>
    <button  className="button-color__remove">Checkout</button>
    </div>
    </div>
  </div>
   </div>
  
);


const mapStateToProps = (state) => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(Cart);
