import './Header.css';

function Header() {
  return (
    <header className="section-header flex justify-center text-white font-bold my-3 py-3">
      <div className="mx-2 px-2 hover:opacity-80">
        <a href="#">
          Blog
        </a>
      </div>
      <div className="mx-2 px-2 hover:opacity-80">
        <a href="#">
          Fale Conosco
        </a>
      </div>
      <div className="mx-2 px-2 hover:opacity-80">
        <a href="#">
          Motorista
        </a>
      </div>
    </header>
  );
}

export default Header;
