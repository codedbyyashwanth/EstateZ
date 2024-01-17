import { Link } from "react-router-dom";

const Footer = () => {
      return (
            <footer>
                  <div className="container">
                        <div className="logo_container">
                              <img src="/logo.png" alt="Company Logo" />
                              <h3 className="logo">Estate<span>Z</span></h3>
                        </div>
                        <div className="link_container">
                              <Link to="/">Home</Link><Link to="/about">About Us</Link><Link to="/properties">Propertes</Link><Link to="services">Services</Link>
                        </div>
                        <div className="info_container">
                              <div className="items">
                                    <span className="material-symbols-outlined">
                                          mail
                                          </span>
                                    <p className="text">hello@skillbirdge.com</p>
                              </div>
                              <div className="items">
                                    <span className="material-symbols-outlined">
                                          call
                                          </span>
                                    <p className="text">+91 91813 23 2309</p>
                              </div>
                              <div className="items">
                                    <span className="material-symbols-outlined">
                                          location_on
                                          </span>
                                    <p className="text">Somewhere in the World</p>
                              </div>
                        </div>
                  </div>
                  <div className="footer_info">
                        <div className="foot_container">
                              <div className="text_container">
                                    <span>@2023 EstateZ. All Rights Reserved. Terms & Conditions</span>
                              </div>

                              <div className="icon_container">
                                    <img src="/fb.png" alt="" />
                                    <img src="/linkedin.png" alt="" />
                                    <img src="/twitter.png" alt="" />
                                    <img src="/youtube.png" alt="" />
                              </div>
                        </div>
                  </div>
            </footer>
      )
}

export default Footer;