import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, message } = this.state;

    // Basic validation
    if (!name || !email || !message) {
      alert("Please fill out all required fields.");
    } else {
      alert("Your message has been sent successfully!");
      this.setState({ name: "", email: "", message: "" }); // Reset form after submission
    }
  };

  render() {
    const { name, email, message } = this.state;

    return (
      <div>
        {/* Navigation bar */}
        <NavBar />

        {/* Breadcrumb */}
        <div
          className="breadcrumb-area breadcrumb-bg"
          style={{
            backgroundImage: `url(https://static.vecteezy.com/system/resources/thumbnails/014/286/469/small_2x/customer-contact-us-service-with-mail-email-telephone-icons-on-the-circle-wooden-put-on-the-desk-photo.jpg)`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page-banner text-center">
                  <h1>Contact Us</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>Contact Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="page-wrapper section-space--inner--120">
          <div className="contact-section">
            <div className="container">
              <div className="text-center mb-5 mt-0 ms-5">
                <h3 className="text-start text-danger ms-5">
                  Take the Next Step Managing your sales processes doesn’t have
                  to be complex. <br/>
                </h3>
              </div>
              <div className="row">
                <div className="col-lg-4 col-12">
                  <div className="contact-information">
                    <h3>Contact Information</h3>
                    <ul>
                      <li>
                        <span className="icon">
                          <i className="ion-android-map" />
                        </span>
                        <span className="text">
                          <span>
                            Stock Building, 125 Main Street 1st Lane, San
                            Francisco, USA
                          </span>
                        </span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="ion-ios-telephone-outline" />
                        </span>
                        <span className="text">
                          <a href="tel:1234567890">+92 334 365987</a>
                          <a href="tel:1234567890">+92 334 365988</a>
                        </span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="ion-ios-email-outline" />
                        </span>
                        <span className="text">
                          <a href="mailto:info@example.com">crasto@gmail.com</a>
                          <a href="mailto:info@example.com">
                            crastomining@gmail.com
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-8 col-12">
                  <div className="contact-form">
                    <h3>Leave Your Message</h3>
                    <form id="contact-form" onSubmit={this.handleSubmit}>
                      <div className="row row-10">
                        <div className="col-md-6 col-12 section-space--bottom--20">
                          <input
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={this.handleInputChange}
                            required
                          />
                        </div>
                        <div className="col-md-6 col-12 section-space--bottom--20">
                          <input
                            name="email"
                            type="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={this.handleInputChange}
                            required
                          />
                        </div>
                        <div className="col-12">
                          <textarea
                            name="message"
                            placeholder="Your Message"
                            value={message}
                            onChange={this.handleInputChange}
                            required
                          />
                        </div>
                        <div className="col-12">
                          <button type="submit">Send Message</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

export default Contact;
