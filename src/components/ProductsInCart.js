import React from 'react';
import { connect } from 'react-redux';
import {startRemoveProduct} from '../actions/products';
import {startEditProduct} from '../actions/products';
class ProductsInCart extends React.Component{
    onRemove = () => {
        this.props.startRemoveProduct({ pid: this.props.pid });
      };
      quantityDec = (e) => {
        e.preventDefault();
        if((parseInt(document.getElementById(`quantity ${this.props.id}`).value))===1){
          this.props.startRemoveProduct({ pid: this.props.pid });
        }
        else{
          let quantity=parseInt(document.getElementById(`quantity ${this.props.id}`).value);
          quantity--;
          document.getElementById(`quantity ${this.props.id}`).value=quantity;
          this.props.startEditProduct(this.props.pid,quantity,quantity*this.props.price);
        }
      };
      quantityInc = (e) => {
        e.preventDefault();
        let quantity=parseInt(document.getElementById(`quantity ${this.props.id}`).value);
        quantity++;
        document.getElementById(`quantity ${this.props.id}`).value=quantity;
        this.props.startEditProduct(this.props.pid,quantity,quantity*this.props.price);
      };

render(){
    return(<div className="prod">
    <h3>{this.props.title}</h3>
    <div className="productInCart">
    <img 
    height={200} 
    title={this.props.title} 
    src={this.props.img}
    />
    <form className="quantity-button">
    <button onClick={this.quantityDec} >-</button>
    <input
     className="quantity-input" 
     type="number"
      id={`quantity ${this.props.id}`}
      value={this.props.count}
      />
    <button onClick={this.quantityInc} >+</button>
    </form>
    <button className="button-color" onClick={this.onRemove}>Remove</button>
    {this.props.total}
    </div>
</div>);

}
}
const mapDispatchToProps = (dispatch) => ({
    startRemoveProduct: ({pid}) => dispatch(startRemoveProduct({pid})),
    startEditProduct: (pid,count,total) => dispatch(startEditProduct(pid,count,total))
  });

export default connect(undefined, mapDispatchToProps)(ProductsInCart);