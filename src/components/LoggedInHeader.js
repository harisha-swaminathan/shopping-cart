import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';
export const LoggedInHeader = ({startLogout}) => (
  <header className="header-color">
  <div className="container">
  <div className="header-color__content">
  <Link to="/dashboard"><img alt="book" src="logo.png" className="logo"/></Link>
  <h2 className="header-color__title" > Your one stop shop for front end development </h2>
  <div className="header-color__right">
  <Link to="/cart"><img alt="cart" src="cart.png" className="logo_cart"/></Link>
  <button className="button-color" onClick={startLogout}>Logout </button>
  </div>
    </div>
    </div>
  </header>
);

const mapDispatchToProps=(dispatch)=>({
    startLogout:()=> dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(LoggedInHeader);