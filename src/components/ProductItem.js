import React from 'react';
import { connect } from 'react-redux';
import QuickView from './QuickView';
import {startAddProduct} from '../actions/products';
import LoginModal from './LoginModal';
import AddedModal from './AddedModal';
export class ProductItem extends React.Component {
  state={
    LoggedIn:!!this.props.auth.uid,
    QuickView:false,
    AddToCart:false,
    Added:!!this.props.products,
    Incart:false,
    Modal:true
  };
  onClick=()=>{
  this.setState({
    QuickView:true
  })
  };
  onClickAdd=()=>{
    console.log(this.props.products)
    if(this.props.auth.uid){
    this.props.startAddProduct(this.props.product);
    this.setState({
      Added:true
    })
    }
    else{
      this.setState({
        AddToCart:true
      })
    }
    };
    ClearSelectedOption = () => {
      this.setState({ 
        AddToCart: false, 
        Modal:undefined 
      });
      console.log(this.state);
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
       <button disabled={(!this.state.Added || !this.state.LoggedIn)?false:true} onClick={this.onClickAdd} >Add to cart </button>
    {/* {this.state.Incart?(< AddedModal />):null} */}  
    {/* {this.state.AddToCart?(< LoginModal open={this.state.Modal} ClearSelectedOption={this.ClearSelectedOption}/>):null} */}
        <button onClick={this.onClick}  >Quickview</button>
        {this.state.QuickView?(< QuickView selectedOption={this.props.product} 
        />):null}
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


