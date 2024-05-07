import ScrollButton from "./ScrollButton";
import Sidebar from "./SideBar";
import { useState, useEffect, useRef } from "react";
import "./styles/Header.css";

function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for NavIcon

  useEffect(() => {
    const handleResize = () => {
      if (headerRef.current) {
        setIsSmallScreen(headerRef.current.clientWidth <= 1200);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div id="header-container" ref={headerRef}>
        <a href="/" className="left">
          <img
            className="logo-or-pic"
            src="/headshot.jpg"
            alt="logo or picture"
          />
          <p className="header-title">Brayden Nguyen</p>
        </a>
        {!isSmallScreen && (
          <div className="right">
            <ScrollButton name="About" sectionId="hero-section" />
            <ScrollButton name="Experience" sectionId="work-section" />
            <ScrollButton name="Projects" sectionId="projects-section" />
            <ScrollButton name="Contact" sectionId="contact-section" />
            <a href="/Brayden_Nguyen_Resume.pdf" className="scrollButton">
              <p className="scrollButtonText">Resume</p>
            </a>
          </div>
        )}
        {isSmallScreen && (
          <div >
            <NavIcon isOpen={isOpen} toggleMenu={toggleMenu} /> 
          </div>
        )}
          {isSmallScreen && isOpen && <Sidebar />}
          </div>
    </>
  );
}

interface NavIconProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

function NavIcon({ isOpen, toggleMenu }: NavIconProps) {
  // Receive isOpen and toggleMenu as props
  return (
    <div id="nav-icon3" className={isOpen ? "open" : ""} onClick={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default Header;
