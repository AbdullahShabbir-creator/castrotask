import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import HeroSliderOne from '../components/HeroSliderOne';
import ServiceGridSlider from '../components/ServiceGridSlider';
import Funfact from '../components/Funfact';
import VideoCta from '../components/VideoCta';
import ProjectSlider from '../components/ProjectSlider';
import BrandLogoSlider from '../components/BrandLogoSlider';
import Footer from '../components/Footer';


class HomeOne extends Component{
    render(){
        
        return(
            <div>
        
                <NavBar/>
                
                {/* Hero slider */}
                <HeroSliderOne/>
                
                {/* Service grid slider */}
                <ServiceGridSlider/>
                
                {/* Fun fact */}
                <Funfact/>
                
                {/* Video CTA */}
                <VideoCta/>
                
                {/* Project Slider */}
                <ProjectSlider/>
                
           
                
            
                
            

         
                <BrandLogoSlider />

                {/* Footer */}
                <Footer/>

            </div>
        )
    }
}


export default HomeOne;