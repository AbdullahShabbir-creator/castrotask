import React, { Component } from 'react';
import SwiperSlider, { SwiperSlide } from "./swiper";

class ServiceGridSlider extends Component {
    render() {
        const params = {
            slidesPerView: 3,
            loop: true,
            spaceBetween: 30,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            breakpoints: {
                300: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 2
                },
                992: {
                    slidesPerView: 3
                }
            }
        };

        let data = [
            { 
                img: 'https://media.istockphoto.com/id/1579865323/photo/the-factory-land-full-of-coal-is-mechanically-operating-and-transported.webp?a=1&b=1&s=612x612&w=0&k=20&c=MGlETbjQYuaK3Ja8-vDNbreiybM3pXxZZxTNVAKrRL8=',
                iconName: 'flaticon-002-welding', 
                serviceTitle: 'Land Mining', 
                serviceExcerpt: 'How Land Mining Shapes Our Planet and Communities.',
                serviceUrl: 'service-details-left-sidebar'
            },
            { 
                img: 'http://img.freepik.com/free-photo/wide-angle-shot-excavation-machines-lookout-jackerath-garzweiler-skywalk-germany_181624-10184.jpg?t=st=1738581603~exp=1738585203~hmac=566b1812d617c3a485ccc130605b9b4edafcef54bc10645c68de93d8bc6826ec&w=900',  
                iconName: 'flaticon-004-walkie-talkie', 
                serviceTitle: 'Work Management', 
                serviceExcerpt: ' Streamlining Work Management for Construction Efficiency.',
                serviceUrl: 'service-details-left-sidebar'
            },
            { 
                img: 'https://img.freepik.com/free-photo/wide-shot-mining-field-with-industrial-structure_181624-15314.jpg?t=st=1738581647~exp=1738585247~hmac=6c1d27d11d57cd4df5568d09a752d4751763a5487eba672cfeb9bf7513ab3e36&w=900',  
                iconName: 'flaticon-015-cart', 
                serviceTitle: 'Material Engineering', 
                serviceExcerpt: ' Material Engineering at the Core of Every Strong Foundation',
                serviceUrl: 'service-details-left-sidebar'
            },
            { 
                img: 'https://media.istockphoto.com/id/1579865323/photo/the-factory-land-full-of-coal-is-mechanically-operating-and-transported.webp?a=1&b=1&s=612x612&w=0&k=20&c=MGlETbjQYuaK3Ja8-vDNbreiybM3pXxZZxTNVAKrRL8=',  
                iconName: 'flaticon-010-tank-1', 
                serviceTitle: 'Power and Energy', 
                serviceExcerpt: 'Harnessing Power and Energy for a Sustainable Future',
                serviceUrl: 'service-details-left-sidebar'
            },
        ];

        let DataList = data.map((val, i) => {
            return (
                <SwiperSlide key={i}>
                    <div className="swiper-slide">
                        <div className="service-grid-item">
                            <div className="service-grid-item__image">
                                <div className="service-grid-item__image-wrapper">
                                    <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`}>
                                        <img 
                                            src={val.img} 
                                            className="img-fluid" 
                                            alt={val.serviceTitle} 
                                            style={{ width: '100%', height: 'auto', objectFit: 'cover' }} 
                                        />
                                    </a>
                                </div>
                                <div className="icon">
                                    <i className={val.iconName} />
                                </div>
                            </div>
                            <div className="service-grid-item__content">
                                <h3 className="title">
                                    <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`}>{val.serviceTitle}</a>
                                </h3>
                                <p className="subtitle">{val.serviceExcerpt}</p>
                                <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`} className="see-more-link">SEE MORE</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            );
        });

        return (
            <div>
                {/*====================  service grid slider area ====================*/}
                <div className="service-grid-slider-area section-space--inner--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title-area text-center">
                                    <h2 className="section-title section-space--bottom--50">
                                        Our Services 
                                    </h2>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="service-slider">
                                    <SwiperSlider options={params}>
                                        {DataList}
                                    </SwiperSlider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        );
    }
}

export default ServiceGridSlider;
