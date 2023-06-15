import Headroom from 'react-headroom';
import '../styles/sections/Header.css';
import logo from '../images/header-astronaut.webp'
import { Squash as Hamburger } from 'hamburger-react'

function Header() {
  const showMenu = () => {
    const navList = document.querySelector('.nav-list');
    if (navList.classList.contains('show-menu')) {
      navList.classList.remove('show-menu');
    } else {
      navList.classList.add('show-menu');
    }
  };
  return (
    <Headroom>
      <header className="header">
        <div className="logo-container">
          <img className="logo" src={logo} alt="logo" href="#"/>
          <h5 className="he logo-title">Devs<span className="at">4Good</span></h5>
        </div>
        <div className="mobile-menu">
          <Hamburger
            size={22}
            rounded
            onToggle={toggled => showMenu(toggled)}
          />
        </div>
        <nav>
          <ul className="nav-list">
            <li><a className="nav-link" href="#">Home</a></li>
            <li><a className="nav-link" href="#about">A empresa</a></li>
            <li><a className="nav-link" href="#services">Serviços</a></li>
            <li><a className="nav-link" href="#team">Time</a></li>
            <li><a className="nav-link" href="#portfolio">Projetos</a></li>
            <li><a className="nav-link" href="#contact">Contato</a></li>
          </ul>
        </nav>
      </header>
    </Headroom>
  );
}

export default Header;
