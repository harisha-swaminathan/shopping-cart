import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';
export const LoggedInHeader = ({startLogout}) => (
  <header className="header-color">
  <div className="container">
  <div className="header-color__content">
  <h1 className="header-color__title">  shopping </h1>
  <button className="button-color" onClick={startLogout}>Logout </button>
 <Link className="button-color" to="/cart"><h1> cart </h1></Link>     {/* please add an icon to this and fix the spacing*/ }
    </div>
    </div>
  </header>
);

const mapDispatchToProps=(dispatch)=>({
    startLogout:()=> dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(LoggedInHeader);