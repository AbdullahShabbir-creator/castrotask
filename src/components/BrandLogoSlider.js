import React, {Component} from 'react';
import SwiperSlider, { SwiperSlide } from "./swiper";

class BrandLogoSlider extends Component{
    render(){

        const params = {
            slidesPerView : 2,
            loop: true,
            spaceBetween : 30,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            // Responsive breakpoints
            breakpoints: {
                576:{
                    slidesPerView : 3

                },
                992:{
                    slidesPerView : 4
                }
            }
        }

        let data = [
            {img: 'https://marketplace.canva.com/EAF3hoQADdU/2/0/1600w/canva-green-and-blue-building-icon-construction-logo-WAi6evUuIlg.jpg', logoLink: '/'},
            {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmkonnbfYXUJ7A1_dHbd_m-MSYVzyaQPzakQ&s', logoLink: '/'},
            {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb4kYlDMDu2pahmClKVGzqy4l1m09f3mtRsA&s', logoLink: '/'},
            {img: 'https://img.pikbest.com/png-images/20241014/letters-mx-logo-design-xm-loggo-vectors-simple-modern-monogram-royalty_10960067.png!sw800', logoLink: '/'},
            {img: 'https://marketplace.canva.com/EAF3hoQADdU/2/0/1600w/canva-green-and-blue-building-icon-construction-logo-WAi6evUuIlg.jpg', logoLink: '/'},
            {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmkonnbfYXUJ7A1_dHbd_m-MSYVzyaQPzakQ&s', logoLink: '/'},
            {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmkonnbfYXUJ7A1_dHbd_m-MSYVzyaQPzakQ&s', logoLink: '/'},
            {img: 'https://t3.ftcdn.net/jpg/00/79/67/48/360_F_79674837_Jn4HbqZGciL1jMeobbM6xNOUUjen936J.jpg', logoLink: '/'}
        ];

        let DataList = data.map((val, i)=>{
            return(
                <SwiperSlide key={i}>
                    <div className="brand-logo-slider__single">
                        <div className="image text-center">
                            <a href={val.logoLink}>
                                <img src={`${val.img}`} className="img-fluid" alt="" />
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
            )
        });


        return(
            <div>
                {/*====================  brand logo area ====================*/}
                <div className={`brand-logo-slider-area section-space--inner--60 ${this.props.background}`}>
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        {/* brand logo slider */}
                        <div className="brand-logo-slider__container-area">
                            <SwiperSlider options={params}>
                                {DataList}
                            </SwiperSlider>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/*====================  End of brand logo area  ====================*/}
            </div>
        )
    }
}

export default BrandLogoSlider;