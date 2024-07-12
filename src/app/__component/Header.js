"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  
  return (
    <>
      <header className="header_area">
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <Link className="navbar-brand logo_h" href="/">
                <Image src="/img/AakashBadole-logo.png" alt="Akash Badole Portfolio"  width={100} height={61} />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div
                className="collapse navbar-collapse offset"
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav menu_nav justify-content-end">
                  <li
                    className={
                      pathname === "/" ? "nav-item active" : "nav-item"
                    }
                  >
                    <Link className="nav-link" href="/">
                      Home
                    </Link>
                  </li>
                  <li
                    className={
                      pathname === "/About" ? "nav-item active" : "nav-item"
                    }
                  >
                    <Link className="nav-link" href="/About">
                      About
                    </Link>
                  </li>
                  <li
                    className={
                      pathname === "/Services" ? "nav-item active" : "nav-item"
                    }
                  >
                    <Link className="nav-link" href="/Services">
                      Services
                    </Link>
                  </li>
                  <li
                    className={
                      pathname === "/Portfolio" ? "nav-item active" : "nav-item"
                    }
                  >
                    <Link className="nav-link" href="/Portfolio">
                      Portfolio
                    </Link>
                  </li>

                  <li
                    className={
                      pathname === "/Blog" ? "nav-item active" : "nav-item"
                    }
                  >
                    <Link className="nav-link" href="/Blog">
                      Blog
                    </Link>
                  </li>
                  <li
                    className={
                      pathname === "/Contact" ? "nav-item active" : "nav-item"
                    }
                  >
                    <Link className="nav-link" href="/Contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
