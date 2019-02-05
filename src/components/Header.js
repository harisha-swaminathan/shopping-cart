import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';
import {startLogout} from '../actions/auth';
export const Header = ({startLogin,auth,startLogout}) => (
  <header className="header-color">
  <div className="container">
  <div className="header-color__content">
  <Link to="/dashboard"><img alt="book" src="logo.png" className="logo"/></Link>
    <h2 className="header-color__title" > Your one stop shop for front end development </h2>
    <div className="header-color__right">
  {!!auth.uid?((<Link to="/cart"><img alt="cart" src="cart.png" className="logo_cart"/></Link>)):null}
  {!!auth.uid?(<button className="button-color" onClick={startLogout}>Logout</button>):null}
   {!!auth.uid?null:(<button className="button-color" onClick={startLogin}>Login with Google</button>)}
   </div>
    </div>
    </div>
  </header>
);

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps=(dispatch)=>({
  startLogin:()=> dispatch(startLogin()),
  startLogout:()=> dispatch(startLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

  
  


