import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
class ServiceTabExample extends Component{

    render(){
        
        /* service tab menu */
        let serviceTabMenuData = [
            {iconName: 'flaticon-002-welding', tabMenuName: 'Lankkd Mining'},
            {iconName: 'flaticon-004-walkie-talkie', tabMenuName: 'Work Management'},
            {iconName: 'flaticon-015-cart', tabMenuName: 'Material Engineering'},
            {iconName: 'flaticon-010-tank-1', tabMenuName: 'Power and Energy'}
        ];

        let serviceTabMenuDatalist = serviceTabMenuData.map((val, i)=>{
            return(
                <Tab key={i}>  <span className="icon"><i className={val.iconName} /></span> <span className="text">{val.tabMenuName}</span></Tab>
            )
        });

        
        /* service tab content */
        
        let serviceTabContentData = [
            {bgUrl: "https://img.freepik.com/free-photo/heavy-machinery-quarry_158595-5157.jpg?t=st=1738579739~exp=1738583339~hmac=c639f62708be2a34b9389236e029ff912a0299829d59c3be77546a03e765a6b6&w=900", contentTitle: 'Land Mining', contentDesc: 'asdfghjk'},
            {bgUrl: "service-tab1.jpg", contentTitle: 'Work Management', contentDesc: 'Lorem ipsum dolor sit amet, consectet adipisicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', serviceLink: 'service-details-left-sidebar'},
            {bgUrl: "service-tab1.jpg", contentTitle: 'Material Engineering', contentDesc: 'Lorem ipsum dolor sit amet, consectet adipisicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', serviceLink: 'service-details-left-sidebar'},
            {bgUrl: "service-tab1.jpg", contentTitle: 'Power and Energy', contentDesc: 'Lorem ipsum dolor sit amet, consectet adipisicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', serviceLink: 'service-details-left-sidebar'}
        ];

        let serviceTabContentDatalist = serviceTabContentData.map((val, i)=>{
            return(
                <TabPanel key={i}>
                    <div className="service-tab__single-content-wrapper" style={{ backgroundImage: `url(https://img.freepik.com/free-photo/heavy-machinery-quarry_158595-5157.jpg?t=st=1738579739~exp=1738583339~hmac=c639f62708be2a34b9389236e029ff912a0299829d59c3be77546a03e765a6b6&w=900)` }}>
                        <div className="service-tab__single-content">
                            <h3 className="service-tab__title">{val.contentTitle}</h3>
                            <p className="service-tab__text">{val.contentDesc}</p>
                            <a href={`${process.env.PUBLIC_URL}/${val.serviceLink}`} className="see-more-link">SEE MORE</a>
                        </div>
                    </div>
                </TabPanel>
            )
        });

        return(
            <div>

                {/*====================  service tab area ====================*/}
                <div className="service-tab-area section-space--inner--120">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title-area text-center">
                        <h2 className="section-title section-space--bottom--50 ">OuServices <span className="title-icon" /></h2>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        {/* service tab wrapper */}
                        
                        <div className="service-tab-wrapper">
                        <Tabs>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <TabList>
                                        <div className="service-tab__link-wrapper">
                                            {serviceTabMenuDatalist}
                                        </div>
                                    </TabList>
                                </div>

                                <div className="col-md-8">
                                    {serviceTabContentDatalist}
                                </div>
                            </div>
                        </Tabs>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/*====================  End of service tab area  ====================*/}
            </div>
        )
    }
}

export default ServiceTabExample;