import React, { Component } from "react";
import NavBar from "../components/NavBar";
import BrandLogoSlider from "../components/BrandLogoSlider";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import BenefitsSection from "./components/BenefitsSection";

const services = [
  {
    icon: "bi-gear",
    title: "Automated Management",
    description:
      "No more manual task assignments. Sales Storm automates task allocation, ensuring every team member knows exactly what they need to do.",
  },
  {
    icon: "bi-stack",
    title: "Sales Tracking",
    description:
      "Track everything from lead status to deal closures and team performance. Sales Storm gives you real-time insights into your sales progress.",
  },
  {
    icon: "bi-people",
    title: "Lead Management",
    description:
      "Forget the complexities of lead tracking. Sales Storm streamlines the process, ensuring no lead is left behind and boosting conversion rates.",
  },
  {
    icon: "bi-people",
    title: "Lead Management",
    description:
      "Forget the complexities of lead tracking. Sales Storm streamlines the process, ensuring no lead is left behind and boosting conversion rates.",
  },
  {
    icon: "bi-people",
    title: "Lead Management",
    description:
      "Forget the complexities of lead tracking. Sales Storm streamlines the process, ensuring no lead is left behind and boosting conversion rates.",
  },
  {
    icon: "bi-people",
    title: "Lead Management",
    description:
      "Forget the complexities of lead tracking. Sales Storm streamlines the process, ensuring no lead is left behind and boosting conversion rates.",
  },
];

class Services extends Component {
  render() {
    return (
      <div>
        <NavBar />

        <div
          className="breadcrumb-area breadcrumb-bg"
          style={{
            backgroundImage: `url(https://cdn.pixabay.com/photo/2015/06/10/16/36/mark-804938_1280.jpg)`
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page-banner text-center">
                  <h1>Service</h1>
                  <ul className="page-breadcrumb ">
                    <li className="list-unstyled">
                      <a href="/" className="text-white" style={{listStyle:'none'}}>Home</a>
                    </li>
                    <li>Service</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*====================  service page content ====================*/}
        <div className="container mt-5">
          <h2 className="text-center mb-4">
            Here's What Makes CRM Your Ultimate Sales Control Tool
          </h2>
          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-md-4 p-2">
                <div className="card d-flex flex-row align-items-center p-3 shadow h-100">
                  {/* Icon on the Left */}
                  <div
                    className="icon-box d-flex align-items-center justify-content-center me-3"
                    style={{
                      backgroundColor: "#E55347",
                      width: "90px",
                      height: "40px",
                      padding: "9px",
                      borderRadius: "10px",
                    }}
                  >
                    <i className={`bi ${service.icon} text-white fs-3`}></i>
                  </div>

                  {/* Text on the Right */}
                  <div>
                    <h5 className="fw-bold">{service.title}</h5>
                    <p className="text-muted">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <BenefitsSection />

        {/*====================  End of service page content  ====================*/}

        {/* Brand logo */}
        <BrandLogoSlider background="grey-bg" />

        {/* Footer */}
        <Footer />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

export default Services;
