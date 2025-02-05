import React, { Component } from 'react';

class FeatureIcon extends Component{
    render(){

        let data = [
            {featureIcon: "feature-1.png", featureTitle: "Top Rated", featureDescription: "As a top-rated construction company, Castro is known for delivering exceptional results and exceeding client expectations. "},
            {featureIcon: "feature-2.png", featureTitle: "Best Quality", featureDescription: "At Castro, we pride ourselves on delivering unmatched quality in every project. With over 50 years of experience."},
            {featureIcon: "feature-3.png", featureTitle: "Low Cost", featureDescription: "We believe that great quality shouldn’t break the bank. Our team is dedicated to finding cost-effective solutions ."}
        ];

        let Datalist = data.map((val, i)=>{
            return(
                <div className="col-lg-4 col-md-6 col-12 section-space--bottom--30" key={i}>
                    <div className="feature">
                    <div className="icon">
                        <img src={`assets/img/icons/${val.featureIcon}`} className="img-fluid" alt="" />
                    </div>
                    <div className="content">
                        <h3>{val.featureTitle}</h3>
                        <p>{val.featureDescription}</p>
                    </div>
                    </div>
                </div>
            )
        });

        return(
            <div>
                {/*Feature section start*/}
                <div className={`feature-section section-space--inner--100 ${this.props.background}`}>
                    <div className="container">
                        <div className="col-lg-12">
                            <div className="feature-item-wrapper">
                                <div className="row">
                                    {Datalist}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Feature section end*/}
            </div>
        )
    }
}

export default FeatureIcon;