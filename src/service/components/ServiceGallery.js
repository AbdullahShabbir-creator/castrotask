import React, { Component } from 'react';
import SwiperSlider, { SwiperSlide } from "../../components/swiper";

class ServiceGallery extends Component {
    render() {
                
        /* service image gallery slider params */
        const params = {
            slidesPerView: 1,
            loop: true,
            navigation: true
        };

        /* service image gallery data */
        let imageGalleryData = [
            { img: 'https://img.freepik.com/free-photo/heavy-machinery-quarry_158595-5157.jpg?t=st=1738579739~exp=1738583339~hmac=c639f62708be2a34b9389236e029ff912a0299829d59c3be77546a03e765a6b6&w=900' },
            { img: 'https://img.freepik.com/free-photo/heavy-machinery-quarry_158595-5157.jpg?t=st=1738579739~exp=1738583339~hmac=c639f62708be2a34b9389236e029ff912a0299829d59c3be77546a03e765a6b6&w=900' },
            { img: 'https://img.freepik.com/free-photo/heavy-machinery-quarry_158595-5157.jpg?t=st=1738579739~exp=1738583339~hmac=c639f62708be2a34b9389236e029ff912a0299829d59c3be77546a03e765a6b6&w=900' },
            { img: 'https://img.freepik.com/free-photo/heavy-machinery-quarry_158595-5157.jpg?t=st=1738579739~exp=1738583339~hmac=c639f62708be2a34b9389236e029ff912a0299829d59c3be77546a03e765a6b6&w=900' }
        ];

        /* service image gallery component */
        let ImageGalleryDataList = imageGalleryData.map((val, i) => {
            return (
                <SwiperSlide className="service-gallery__single-slide" key={i}>
                    <div className="item">
                        <img src={val.img} className="img-fluid" alt={`gallery data ${i + 1}`} />
                    </div>
                </SwiperSlide>
            );
        });

        return (
            <div>
                <div className="service-gallery">
                    <SwiperSlider options={params}>
                        {ImageGalleryDataList}
                    </SwiperSlider>
                </div>
            </div>
        );
    }
}

export default ServiceGallery;
