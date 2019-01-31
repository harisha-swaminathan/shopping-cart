import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';
import {startLogout} from '../actions/auth';
export const Header = ({startLogin,auth,startLogout}) => (
  <header className="header-color">
  <div className="container">
  <div className="header-color__content">
    <Link className="header-color__title" to="/dashboard"><h1> shopping </h1></Link>
   {/* <button className="button-color button-merge" onClick={startLogout}>Logout </button>*/}
  {/* <button className="button-color" onClick={startLogin}>Login</button>*/}
  {!!auth.id?(<button className="button-color" onClick={startLogout}>Logout</button>):null}
   {!!auth.id?null:(<button className="button-color" onClick={startLogin}>Login </button>)}
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
