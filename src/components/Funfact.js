import React, { Component } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

class Funfact extends Component {
  state = {
    didViewCountUp: false,
  };

  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.setState({ didViewCountUp: true });
    }
  };

  render() {
    let data = [
      { img: "funfact-project.png", countNum: 598, countTitle: "Projects" },
      { img: "funfact-clients.png", countNum: 128, countTitle: "Clients" },
      { img: "funfact-success.png", countNum: 114, countTitle: "Success" },
      { img: "funfact-award.png", countNum: 109, countTitle: "Awards" },
    ];

    let DataList = data.map((val, i) => {
      return (
        <div
          className="single-fact col-md-3 col-6 section-space--bottom--30"
          key={i}
        >
          <img src={`assets/img/icons/${val.img}`} alt="" />
          <h1 className="counter">
            <VisibilitySensor
              onChange={this.onVisibilityChange}
              offset={{ top: 10 }}
              delayedCall
            >
              <CountUp end={this.state.didViewCountUp ? val.countNum : 0} />
            </VisibilitySensor>
          </h1>
          <h4>{val.countTitle}</h4>
        </div>
      );
    });

    return (
      <div>
        {/*====================  fun fact area ====================*/}
        <div
          className="funfact-section section-space--inner--100 funfact-bg"
          style={{
            backgroundImage: `url(https://img.freepik.com/free-photo/vertical-shot-tractor-beautiful-sky_181624-24179.jpg?t=st=1738583433~exp=1738587033~hmac=61ca76af9f5e85b26b4f8fc49d8acdbd3b05c9d0eeec3726db5e7e67c5ce10e5&w=360)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
         
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="fun-fact-wrapper">
                  <div className="row">{DataList}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of fun fact area  ====================*/}
      </div>
    );
  }
}

export default Funfact;
