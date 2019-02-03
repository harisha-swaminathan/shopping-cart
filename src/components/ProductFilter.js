import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, priceHigh, priceLow} from '../actions/filters';
export class ProductFilters extends React.Component {
  
  onTextChange=(e) => {
    this.props.setTextFilter(e.target.value);
  };
  onSortChange=(e) => {
    if (e.target.value === 'high') {
      this.props.priceHigh();
    } else if (e.target.value === 'low') {
      this.props.priceLow();
    }
  };
  render() {
    return (
      <div className="container"> 
        <div className="input-group">
          <div className="input-group__item">
            <input className="text-input"
              type="text"
              placeholder="Search products"
              value={this.props.filters.text}
              onChange={this.onTextChange}
            />
          </div>
          <div className="input-group__item">
            <select className="select"
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}>
              <option value="high">High to Low</option>
              <option value="low">Low to high</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};
const mapDispatchToProps=(dispatch)=>{
  return{
    setTextFilter:(text)=>dispatch(setTextFilter(text)),
    priceHigh:()=>dispatch(priceHigh()),
    priceLow:()=>dispatch(priceLow())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ProductFilters);
