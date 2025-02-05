import React, { Component } from 'react';
import SwiperSlider, { SwiperSlide } from "./swiper";

class ProjectSlider extends Component{    
    render(){
        const params = {
            slidesPerView: 1,
            loop: true,
            autoplay: false,
            speed: 1000,
            spaceBetween: 30,
            navigation: true
        };
        
        let data = [
            {img: 'https://images.unsplash.com/photo-1570979872224-a1ea9f1248b0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', sliderTitle: 'Land Mining',
            sliderShortDesc: 'Land mining extracts resources from the earth, but it often leaves behind a legacy of environmental damage that lasts for generations.'},
            {img: 'https://plus.unsplash.com/premium_photo-1682144357040-3eff76e73cc7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', sliderTitle: 'Power and Energy', sliderShortDesc: 'Mining operations rely heavily on energy to drive equipment, transport materials, and refine ores, often contributing to environmental concerns through high energy consumption and carbon emissions. ', sliderLink: 'project-details'},
            {img: 'https://plus.unsplash.com/premium_photo-1663045584825-90a22961a4de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', sliderTitle: 'Work Management', sliderShortDesc: 'Work management in land mining involves planning, coordinating, and optimizing resources, personnel, and tasks to ensure efficient and safe operations. It includes scheduling equipment maintenance, ensuring safety compliance, managing labor productivity, and minimizing downtime.', sliderLink: 'project-details'},
        ];

        let DataList = data.map((val, i)=> {
            return (
                <SwiperSlide key={i} >
                    <div className="swiper-slide latest-project-slider__single-slide">
                        <div className="row row-30 align-items-center">
                            <div className="col-lg-6">
                                <div className="image">
                                    <img 
                                      src={`${val.img}`} 
                                      className="img-fluid project-image" 
                                      alt={val.sliderTitle} 
                                    //   style={{ maxWidth: '399px', width: '100%', height: 'auto' }}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="content">
                                    <h3 className="count">{'0' + (i + 1)}</h3>
                                    <h2 className="title">{val.sliderTitle}</h2>
                                    <p className="desc">{val.sliderShortDesc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            );
        });

        return (
            <div>
                {/*====================  project slider area ====================*/}
                <div className="project-slider-area grey-bg section-space--inner--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {/* section title */}
                                <div className="section-title-area text-center">
                                    <h2 className="section-title section-space--bottom--50 text-dark">Latest Projects</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="latest-project-slider">
                                    <div className="latest-project-slider__container-area">
                                        <SwiperSlider options={params} navClass="project">
                                            {DataList}
                                        </SwiperSlider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of project slider area  ====================*/}
            </div>
        );
    }
}

export default ProjectSlider;
