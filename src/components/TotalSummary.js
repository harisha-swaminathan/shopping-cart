import React from 'react';
import { connect } from 'react-redux';
class TotalSummary extends React.Component{
  render(){
    let total=0;
       {
          this.props.products.length===0?(total=0):(this.props.products.map((product)=>{
          total=total+((product.total))
          })
          )
        }
     return (
       
     <div className="summary-bottom">
    <h3 > {total}</h3>
   </div>
         
     );
  }
} 


const mapStateToProps = (state) => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(TotalSummary);
