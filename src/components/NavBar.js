import React, { Component } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleScroll = this.handleScroll.bind(this);

    this.mobileMenuElement = React.createRef();
  }

  activeMobileMenu = () => {
    this.mobileMenuElement.current.toggleMobileMenu();
  };

  handleScroll() {
    if (this.mount) {
      this.setState({ scroll: window.scrollY });
    }
  }

  componentDidMount() {
    this.mount = true;
    const el = document.querySelector("nav");
    this.setState({ top: el.offsetTop, height: el.offsetHeight });
    window.addEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate() {
    this.state.scroll > this.state.top
      ? (document.body.style.paddingTop = `${this.state.height}px`)
      : (document.body.style.paddingTop = 0);
  }

  componentWillUnmount() {
    this.mount = false;
  }

  render() {
    return (
      <div>
        {/*====================  header area ====================*/}
        <div
          className={`header-area header-sticky header-sticky--default ${
            this.state.scroll > this.state.top ? "is-sticky" : ""
          }`}
        >
          <div className="header-area__desktop header-area__desktop--default">
            {/*=======  header top bar  =======*/}
            {/* <div className="header-top-bar">
                        <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                          
                            <div className="top-bar-left-wrapper">
                                <div className="social-links social-links--white-topbar d-inline-block">
                                <ul>
                                    <li><a href="//facebook.com"><i className="zmdi zmdi-facebook" /></a></li>
                                    <li><a href="//twitter.com"><i className="zmdi zmdi-twitter" /></a></li>
                                    <li><a href="//vimeo.com"><i className="zmdi zmdi-vimeo" /></a></li>
                                    <li><a href="//linkedin.com"><i className="zmdi zmdi-linkedin-box" /></a></li>
                                    <li><a href="//skype.com"><i className="zmdi zmdi-skype" /></a></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-8">
                          
                            <div className="top-bar-right-wrapper">
                                <a href={`${process.env.PUBLIC_URL}/contact-us`} className="ht-btn ht-btn--default d-inline-block">GET A QUOTE</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div> */}
            {/*=======  End of header top bar  =======*/}
            {/*=======  header info area  =======*/}
            {/* <div className="header-info-area">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                <div className="header-info-wrapper align-items-center">
                                    {/* logo */}
            {/* 
                                    {/* header contact info */}
            {/* <div className="header-contact-info">
                                    <div className="header-info-single-item">
                                        <div className="header-info-single-item__icon">
                                        <i className="zmdi zmdi-smartphone-android" />
                                        </div>
                                        <div className="header-info-single-item__content">
                                        <h6 className="header-info-single-item__title">Phone</h6>
                                        <p className="header-info-single-item__subtitle">98 9875 5968 54</p>
                                        </div>
                                    </div>
                                    <div className="header-info-single-item">
                                        <div className="header-info-single-item__icon">
                                        <i className="zmdi zmdi-home" />
                                        </div>
                                        <div className="header-info-single-item__content">
                                        <h6 className="header-info-single-item__title">Address</h6>
                                        <p className="header-info-single-item__subtitle">your address goes here</p>
                                        </div>
                                    </div>
                                    </div> */}
            {/* mobile menu */}
            {/* <div className="mobile-navigation-icon" id="mobile-menu-trigger" onClick={this.activeMobileMenu}>
                                        <i />
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                    </div> */}
            {/*=======  End of header info area =======*/}
            {/*=======  header navigation area  =======*/}
            <div className="header-navigation-area bg-dark">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    {/* Header Navigation */}
                    <div className="header-navigation header-navigation--header-default position-relative">
                      <div className="header-navigation__nav position-static">
                        <nav className="navbar navbar-expand-lg navbar-dark">
                          <div className="container-fluid">
                            {/* Logo */}
                            <Link
                              className="navbar-brand"
                              to={`${process.env.PUBLIC_URL}/home-one`}
                            >
                              <img
                                src="https://cdn.dribbble.com/users/765439/screenshots/3627539/logo10.png"
                                alt="Logo"
                                className="logo-img"
                                style={{width:55, border:"1px solid white", borderRadius:"10px"}}
                              />
                            </Link>

                            {/* Navbar Toggler for Mobile View */}
                            <button
                              className="navbar-toggler"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#navbarNav"
                              aria-controls="navbarNav"
                              aria-expanded="false"
                              aria-label="Toggle navigation"
                            >
                              <span className="navbar-toggler-icon"></span>
                            </button>

                            {/* Navbar Links (Centered) */}
                            <div
                              className="collapse navbar-collapse"
                              id="navbarNav"
                            >
                              <ul className="navbar-nav mx-auto">
                                <li className="nav-item px-3">
                                  <Link
                                    className="nav-link text-white"
                                    to={`${process.env.PUBLIC_URL}/home-one`}
                                  >
                                    HOME
                                  </Link>
                                </li>
                                <li className="nav-item px-3">
                                  <Link
                                    className="nav-link text-white"
                                    to={`${process.env.PUBLIC_URL}/about-us`}
                                  >
                                    ABOUT
                                  </Link>
                                </li>
                                <li className="nav-item px-3">
                                  <Link
                                    className="nav-link text-white"
                                    to={`${process.env.PUBLIC_URL}/services`}
                                  >
                                    SERVICE
                                  </Link>
                                </li>
                                <li className="nav-item px-3">
                                  <Link
                                    className="nav-link text-white"
                                    to={`${process.env.PUBLIC_URL}/price`}
                                  >
                                   PRICES
                                  </Link>
                                </li>
                                <li className="nav-item px-3">
                                  <Link
                                    className="nav-link text-white"
                                    to={`${process.env.PUBLIC_URL}/contact-us`}
                                  >
                                    CONTACT
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            {/* Get a Demo Button */}
                            <Link
                              to={`${process.env.PUBLIC_URL}/contact-us`}
                              className="btn btn-primary ms-3"
                            >
                              GET A DEMO
                            </Link>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*=======  End of header navigation area =======*/}
          </div>
        </div>
        {/*====================  End of header area  ====================*/}

        {/* Mobile Menu */}
        <MobileMenu ref={this.mobileMenuElement} />
      </div>
    );
  }
}

export default NavBar;
