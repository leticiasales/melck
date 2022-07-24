import './Header.css';

import HeaderLogo from "../assets/img/header-logo.png"

function Header() {
  return (
    <header className="container mx-auto justify-center relative w-screen flex mb-8 pt-0 pb-8 px-48">
      <div className="absolute logo-position">
        <img src={HeaderLogo} className="w-40"/>
      </div>
      <div className="flex justify-center py-8 text-white font-bold">
        <div className="mx-2 px-2 hover:opacity-80">
          <a href="/">
            Blog
          </a>
        </div>
        <div className="mx-2 px-2 hover:opacity-80">
          <a href="/">
            Fale Conosco
          </a>
        </div>
        <div className="mx-2 px-2 hover:opacity-80">
          <a href="/">
            Motorista
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
