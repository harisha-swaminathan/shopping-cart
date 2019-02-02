import React from 'react';
import { connect } from 'react-redux';
import ProductsInCart from './ProductsInCart';
import TotalSummary from './TotalSummary';
import {startRemoveAll} from '../actions/products';
import Header from './Header';
export class Cart extends React.Component{
  onRemoveAll = () => {
    console.log('gets called');
    this.props.startRemoveAll();
  };
  render(){
    return(
      <div >
        <div className="container"> 
     <Header/>
    <h1> Cart Summary</h1>
    <div className="list-header">
    <div className="visible-desktop">Product</div>
    <div className="visible-desktop">Quantity</div>
    <div className="visible-desktop">Remove</div>
    <div className="visible-desktop">Price</div>
    </div>
    
  <div className="list-bottom">
    {
      this.props.products.length === 0 ? (
        <div> 
          <span className=" list-item list-item--empty">
           No Products in cart
          </span>
        </div>
      ) : (
          this.props.products.map((product) => {
            return <ProductsInCart key={product.pid} {...product} />;
          })
        )
    }
    <div className="summary-heading">
    <h3 >Total</h3>
    <TotalSummary/>
  <button  disabled={(this.props.products.length === 0)?true:false} className="button-color__remove" onClick={this.onRemoveAll}>Checkout</button>
    </div>
    </div>
  </div>
   </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startRemoveAll: () => dispatch(startRemoveAll())
});

const mapStateToProps = (state) => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Cart);
