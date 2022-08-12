import { Link } from 'react-router-dom';
import { useTheme, useMediaQuery } from "@mui/material";
import MenuMobile from "./MenuMobile";
import HeaderLogo from "../assets/img/header-logo.png"

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <header className="container flex justify-center relative w-screen mb-8 max-w-4xl h-20">
      <Link to="/" className="absolute left-0">
        <img src={ HeaderLogo } className="h-20" alt="Melck" />
      </Link>
      { isMobile &&
        <nav className="flex justify-center items-center text-white font-bold">
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
