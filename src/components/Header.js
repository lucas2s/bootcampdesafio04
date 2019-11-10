import React from 'react';
import logo from '../assets/facebook.png'

function Header() {
  return (
    <header>
      <div className="content">
          <img src={ logo } alt="Logo"/>
          <div>
            <span>Meu Perfil</span>
            <i className="material-icons">account_circle</i>
          </div>
      </div>
    </header>
  );
}

export default Header;