import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Sidebar from "./components/Sidebar";
import ServiceGallery from "./components/ServiceGallery";
import BrandLogoSlider from "../components/BrandLogoSlider";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
class ServiceDetailsLeftSidebar extends Component {
  render() {
    return (
      <div>
        {/* Navigation bar */}
        <NavBar />

        {/* breadcrumb */}
        {/*====================  breadcrumb area ====================*/}
        <div
          className="breadcrumb-area breadcrumb-bg"
          style={{
            backgroundImage: `url()`
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page-banner text-center">
                  <h1>Service Details</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href={`${process.env.PUBLIC_URL}/services`}>
                        Services
                      </a>
                    </li>
                    <li>Service Details</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of breadcrumb area  ====================*/}

        <div className="page-wrapper section-space--inner--120">
          {/*Service section start*/}
          <div className="service-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-12 order-1 order-lg-2">
                  <div className="service-details">
                    {/* service gallery */}
                    <ServiceGallery />

                    <div className="content section-space--top--30">
                      <div className="row">
                        <div className="col-12">
                          <h2>Construction</h2>
                          <p>
                          With our expert land mining services, we specialize in the safe and efficient extraction of valuable resources directly from the earth. Our experienced team is equipped with advanced machinery to handle large-scale operations, while adhering to environmental and safety regulations. We prioritize both productivity and sustainability to deliver results that meet your project's needs
                          </p>
                          <p>
                          We focus on both short-term success and long-term sustainability, ensuring that your land mining project is executed with the highest levels of professionalism and care.
                          </p>
                        </div>
                        <div className="col-lg-6 col-12 section-space--top--30">
                          <h3>Project Analysis</h3>
                          <p>
                          Land mining involves the extraction of valuable minerals, metals, and other resources from the earth's surface. This process is vital for industries such as construction, energy, and technology, where raw materials like coal, gold, diamonds, and rare earth metals are in high demand.
                          </p>
                        </div>
                        <div className="col-lg-6 col-12 section-space--top--30">
                          <h3>Project Costing</h3>
                          <p>
                          Project costing for land mining involves several key expenses. These include exploration costs for surveying and environmental assessments, development costs for site preparation and infrastructure, and operational costs for extraction, processing, and equipment. 
                          </p>
                        </div>
                        <div className="col-lg-6 col-12 section-space--top--30">
                          <h3>Project Planning</h3>
                          <p>
                          Project planning for land mining involves defining clear objectives, timelines, and resource requirements. It starts with site selection, environmental assessments, and securing permits. Detailed plans are developed for excavation, processing, and waste management. 
                          </p>
                        </div>
                        <div className="col-lg-6 col-12 section-space--top--30">
                          <h3>Project Strategy</h3>
                          <p>
                          The project strategy for land mining focuses on balancing efficiency with sustainability. It involves choosing the most cost-effective mining methods while ensuring minimal environmental impact.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-12 order-2 order-lg-1">
                  <Sidebar />
                </div>
              </div>
            </div>
          </div>
          {/*Service section end*/}
        </div>

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

export default ServiceDetailsLeftSidebar;
