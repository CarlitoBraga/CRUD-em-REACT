import './nav.css';
import React from 'react';
import {Link} from 'react-router-dom'
export default props =>
<aside className="menu-area">
  <nav className="menu">
     <Link to="/">
         {/*Refatorar o link para um component */}
        <i className=" fa fa-home"> Início</i>
     </Link>
     <Link to="/users">
        <i className="fa fa-users"> Usuários</i>
     </Link>

  </nav>
</aside>
