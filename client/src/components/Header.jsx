import { Link } from 'react-router-dom';
import { useTheme, useMediaQuery } from "@mui/material";
import MenuMobile from "./MenuMobile";
import HeaderLogo from "../assets/img/header-logo.png"

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <header className="container flex lg:justify-center justify-end relative w-screen mb-8 max-w-4xl h-20 lg:px-0 px-6">
      <Link to="/" className="absolute lg:left-0 left-6">
        <img src={ HeaderLogo } className="h-20" alt="Melck" />
      </Link>
      { isMobile ?
        <MenuMobile /> :
        <nav className="flex items-center text-white font-bold">
          <div className="mx-2 px-2 hover:opacity-80">
            <a href="/">
              Blog
            </a>
          </div>
          <div className="mx-2 px-2 hover:opacity-80">
            <Link to="/">
              Fale Conosco
            </Link>
          </div>
          <div className="mx-2 px-2 hover:opacity-80">
            <a href="/">
              Motorista
            </a>
          </div>
        </nav>
      }
    </header>
  );
}

export default Header;
