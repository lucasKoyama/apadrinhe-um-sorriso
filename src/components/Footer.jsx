import '../styles/components/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-menu">
        <ul className="footer-nav-list">
          <li><a href="#">Home</a></li>
          <li><a href="#about">Sobre nós</a></li>
          <li><a href="#what-we-do">O que fazemos</a></li>
          <li><a href="#media">Media</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
        <ul className="footer-nav-list">
          <li><a href="#">Mais</a></li>
          <li><a href="#">Projetos</a></li>
          <li><a href="#">Eventos</a></li>
          <li><a href="#">Doar</a></li>
        </ul>
        <ul className="footer-nav-list">
          <li><a href="#">Connect</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
      <p className="made-by">Desenvolvido por <a href="#about-area">Devs4Good</a> &copy; 2023</p>
    </footer>
  );
}

export default Footer;
