import HeaderLogo from "../../assets/img/header-logo.png"

function Header() {
  return (
    <header className="container flex justify-center relative w-screen mb-8 max-w-4xl h-20">
      <div className="absolute left-0">
        <img src={HeaderLogo} className="h-20"/>
      </div>
      <div className="flex justify-center items-center text-white font-bold">
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
