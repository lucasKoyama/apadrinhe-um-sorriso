import '../styles/components/Header.css';
import CustomButton from './buttons/CustomButton';
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
    <header className="header">
      <div className="logo-container">
        {/* <img className="logo" src={logo} alt="logo" href="#"/> */}
        <h5 className="logo-title">Apadrinhe um Sorriso</h5>
      </div>
      <nav>
        <ul className="nav-list">
          <li><a className="nav-link" href="#">Home</a></li>
          <li><a className="nav-link" href="#about">Sobre nós</a></li>
          <li><a className="nav-link" href="#what-we-do">O que fazemos</a></li>
          <li><a className="nav-link" href="#media">Media</a></li>
          <li><a className="nav-link" href="#contato">Contato</a></li>
        </ul>
      </nav>
      <CustomButton btnText="Doar" classe="navbar"/>
      <div className="mobile-menu">
        <Hamburger
          size={22}
          rounded
          onToggle={toggled => showMenu(toggled)}
        />
      </div>
    </header>
  );
}

export default Header;
