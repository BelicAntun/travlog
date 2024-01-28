import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  return (
    <header className="w-full flex justify-between items-center px-4 sm:px-16 lg:px-[101px] py-4 lg:py-[31px]">
      <div className="logo flex justify-center items-center">
        <span className="text-lg sm:text-2xl lg:text-[32px] lg:leading-10 font-bold">Travlog</span>
      </div>
      <nav className="hidden md:flex justify-center space-x-5 lg:space-x-8 items-center text-base leading-5">
        <a href="/" className="font-semibold text-primary-dark">
          Home
        </a>
        <a href="/about" className="text-primary-black-75 font-medium whitespace-nowrap">
          About
        </a>
        <a href="/destinations" className="text-primary-black-75 font-medium whitespace-nowrap">
          Destinations
        </a>
        <a href="/packages" className="text-primary-black-75 font-medium whitespace-nowrap">
          Packages
        </a>
        <a href="/blog" className="text-primary-black-75 font-medium whitespace-nowrap">
          Blog
        </a>
        <a href="/contact" className="text-primary-black-75 font-medium whitespace-nowrap">
          Contact Us
        </a>
      </nav>
      <FontAwesomeIcon icon={faBars} className="md:hidden text-primary-black-75 h-5 w-5" />
    </header>
  );
};
