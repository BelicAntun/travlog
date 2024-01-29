import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span>Travlog</span>
      </div>
      <nav className="navigation">
        <a href="/" className="active">
          Home
        </a>
        <a href="/about">About</a>
        <a href="/destinations">Destinations</a>
        <a href="/packages">Packages</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact Us</a>
      </nav>
      <FontAwesomeIcon icon={faBars} className="bars" />
    </header>
  );
};
