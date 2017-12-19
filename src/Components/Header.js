import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {

  render(){

    return (
      <header>
        <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/aves">Inicio</Link>
            </div>
            <ul className="nav navbar-nav">
              <li><Link to='/aves'>Lista de aves</Link></li>
              <li><Link to='/aves/crear'>Agregar nueva ave</Link></li>
            </ul>
          </div>
        </nav>
      </header>
    )

  }

}

export default Header;
