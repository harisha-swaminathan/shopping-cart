import React from 'react';
import { connect } from 'react-redux';
import QuickView from './QuickView';
import {startAddProduct} from '../actions/products';
import LoginModal from './LoginModal';
export class ProductItem extends React.Component {
  state={
    LoggedIn:!!this.props.auth.uid,
    QuickView:false,
    Added:!!this.props.products,
  };
  onClick=()=>{
    this.setState({
    QuickView:true
  })
  };
  onClickAdd=()=>{
      this.props.startAddProduct(this.props.product);
    this.setState({
      Added:true
    })
    };
     render() {
    return (
      <div className="prod">
       <div className="zoom">
       <img 
       height={300}
       title={this.props.product.title}
       src={this.props.product.img}
       />
       </div>
       <div>${this.props.product.price}</div>
       <div className="eachbutton">
       <div className="tooltip">
       <button disabled={(!this.state.Added||!this.state.LoggedIn)?false:true} onClick={this.onClickAdd} >Add to cart </button>
       {!this.state.LoggedIn&&(<span className="tooltiptext">Login to add</span>)}
       </div>
        <button onClick={this.onClick}> Quickview </button>
        {this.state.QuickView &&(< QuickView selectedOption={this.props.product} />)}
       </div>
       </div>
    );
  }
};
const mapStateToProps = (state,props) => ({
  auth: state.auth,
  products:state.products.find((product) => product.id === props.product.id)
});

const mapDispatchToProps = (dispatch) => ({
  startAddProduct: (product) => dispatch(startAddProduct(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);


