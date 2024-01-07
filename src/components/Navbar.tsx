import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useRef } from "react";


const Navbar = ({isActive}: {isActive:string}) => {
      const navRef = useRef<HTMLDivElement>(null);

      const openNav = (e: React.MouseEvent<HTMLSpanElement>) => {
            navRef.current?.classList.toggle("open_nav");
            if (e.currentTarget.textContent == "close")
                  e.currentTarget.textContent = "notes";
            else
                  e.currentTarget.textContent = "close";
      }
      
      return (
            <nav>
                  <div className="container">
                        <div className="navigation">
                              <div className="logo_container">
                                    <img src={Logo} alt="" />
                                    <h3>Estate<span>Z</span></h3>
                              </div>
                              <div className="nav_items">
                                    <Link to="/" className={isActive == "home" ? "active_nav" : ""}>Home</Link>
                                    <Link to="/about" className={isActive == "about" ? "active_nav" : ""}>About Us</Link>
                                    <Link to="/properties" className={isActive == "properties" ? "active_nav" : ""}>Properties</Link>
                                    <Link to="/services" className={isActive == "services" ? "active_nav" : ""}>Services</Link>
                              </div>
                              <Link className="secondary_btn" to="/contact">
                                    Contact Us
                              </Link>
                        </div>

                        <div className="mobile_navigation">
                              <div className="logo_container">
                                    <img src={Logo} alt="" />
                                    <h3>Estate<span>Z</span></h3>
                              </div>
                              <div className="mobile_nav_items" ref={navRef}>
                                    <Link to="/" className={isActive == "home" ? "active_nav" : ""}>Home</Link>
                                    <Link to="/about" className={isActive == "about" ? "active_nav" : ""}>About Us</Link>
                                    <Link to="/properties" className={isActive == "properties" ? "active_nav" : ""}>Properties</Link>
                                    <Link to="/services" className={isActive == "services" ? "active_nav" : ""}>Services</Link>
                                    <Link className="secondary_btn" to="/contact">Contact Us</Link>
                              </div>
                              <div className="menu_btn">
                                    <span className="material-symbols-outlined" onClick={openNav}>notes</span>
                              </div>
                        </div>
                  </div>
            </nav>
      );
}

export default Navbar;