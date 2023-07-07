import React,{Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link,NavLink} from 'react-router-dom'
const NavBar = () => {
    const guestLinks =  (
         <Fragment>
             <li className = 'nav-item'>
                 <NavLink className = 'nav-link' exact="true" to='/login'>Login</NavLink>
             </li>
              <li className = 'nav-item'>
                 <NavLink className = 'nav-link' exact="true" to='/register'>Register</NavLink>
             </li>
         </Fragment>
    );

  return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                  <Link className="navbar-brand" exact="true" to='/'>Authentication</Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav">
                          <li className="nav-item">
                              <NavLink className="nav-link" exact="true" to='/'>Home</NavLink>
                          </li>
                          {guestLinks}
                      </ul>
                  </div>
              </div>
          </nav>
      </div>
  );
}

export default NavBar;