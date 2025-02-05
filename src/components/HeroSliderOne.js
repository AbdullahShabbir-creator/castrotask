import React, { Component } from "react";
import SwiperSlider, { SwiperSlide } from "./swiper";
import "../CSS/HeroSlider.css";
class HeroSliderOne extends Component {
  render() {
    const params = {
      slidesPerView: 1,
      loop: true,
      navigation: true,
      autoplay: {
        delay: 5500,
        disableOnInteraction: false,
      },
    };

    let data = [
      {
        bgImg:
          "https://img.freepik.com/premium-photo/workers-install-reinforcement-structures-construction-transport-bridge_327697-843.jpg?semt=ais_hybrid",
        sliderTitle: "Build Your Dream With Passion",
        sliderSubtitle: "Ready to Build? We’ll Make It Happen.",
        btnLink: "contact-us",
      },

      {
        bgImg:
          "https://img.freepik.com/free-photo/glow-cityscape-view_1112-261.jpg?t=st=1738578741~exp=1738582341~hmac=7df46cba4656b1e16389d10aa4a276937798be63ba00643651cbd770f00151f9&w=900",
        sliderTitle: "Build Your Dream With Passion",
        sliderSubtitle: "Ready to Build? We’ll Make It Happen.",
        btnLink: "contact-us",
      },
      {
        bgImg:
          "https://img.freepik.com/premium-photo/construction-worker-stands-front-building-with-blue-sky-background_605423-8428.jpg?w=1060",
        sliderTitle: "Build Your Dream With Passion",
        sliderSubtitle: "Your Construction Journey Starts with a Click.",
        btnLink: "contact-us",
      },
    ];

    let DataList = data.map((val, i) => {
      return (
        <SwiperSlide key={i}>
          <div
            className="hero-slider__single-item"
            style={{ backgroundImage: `url(${val.bgImg})` }}
          >
            <div className="hero-slider__content-wrapper">
              <div className="container">
                <div className="row justify-content-center align-items-center">
                  <div className="col-14">
                    <div className="hero-slider__content m-5">
                      <h4 className="hero-slider__title">{val.sliderTitle}</h4>
                      <h5 className="hero-slider__text">
                        {val.sliderSubtitle}
                      </h5>
                      <a
                        className="btn btn-primary hero-slider__btn"
                        href={`${process.env.PUBLIC_URL}/${val.btnLink}`}
                      >
                        {" "}
                        GET START
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      );
    });

    return (
      <div>
        {/*====================  hero slider area ====================*/}
        <div className="hero-alider-area">
          <SwiperSlider options={params}>{DataList}</SwiperSlider>
        </div>
        {/*====================  End of hero slider area  ====================*/}
      </div>
    );
  }
}

export default HeroSliderOne;
